import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbconnect } from "./dbconnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },     // ✅ REQUIRED
        password: { label: "Password", type: "password" }  // ✅ REQUIRED
      },
      async authorize(credentials, req) {
        console.log("Credentials received:", credentials); // {email: "...", password: "..."}

        if (!credentials?.email || !credentials?.password) {
          return null; // ✅ Missing credentials
        }

        try {
          const user = await loginUser({
            email: credentials.email,
            password: credentials.password
          });

          // ✅ CRITICAL: Serialize MongoDB ObjectId
          if (user) {
            return {
              id: user.id.toString(),   // Convert ObjectId → string
              email: user.email,
              name: user.name || user.username
            };
          }

          return null; // ✅ Invalid credentials
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    }),

      GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  ],

  callbacks:{
    async signIn({user,account,profile,email,credentials}){

const isExits = await dbconnect(collections.USERS).findOne({email:user.email, provider:account.provider});



if(isExits){
return true;
}else{
const newUser ={
          provide: account?.provider,
          name: user.name,
          email:user.email,
          image: user.image,
    
          role:"user"
      };

      const result = await dbconnect(collections.USERS).insertOne(newUser);
      return result.acknowledged;

}
      

    
    },

//     async redirect({url, baseUrl}){
//   return baseUrl;
//     },

//     async session({session, token, user}){
//  return session;
//     },

//     async jwt({token,user,account,profile,isNewUser}){
//       return token;
//     }
  },



  pages: {
    signIn: "/login"  // Optional: Custom login page
  }
};

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
          return null; 
        }

        try {
          const user = await loginUser({
            email: credentials.email,
            password: credentials.password
          });

         
          if (!user) {
          return null;
          }

            const db = await dbconnect(collections.USERS);
          const fullUser = await db.findOne({ email: user.email });


               return {
    id: user._id,
    email: user.email,
    name: user.name,
    role: fullUser?.role || 'user' 
  };
   
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

const connectUser = await dbconnect(collections.USERS);
const isExits =await connectUser.findOne({email:user.email});
// provider:account?.provider,


if(isExits){
return true;
}else{
const newUser ={
          provider: account?.provider,
          name: user.name,
          email:user.email,
          image: user.image,
    
          role:"user"
      };

      const getUser = await dbconnect(collections.USERS);
      const result =await getUser.insertOne(newUser);
      return result.acknowledged;

}
      

    
    },

//     async redirect({url, baseUrl}){
//   return baseUrl;
//     },


   async jwt({token,user,account,profile,isNewUser}){

    console.log("account data in token", account)

      if(user){
        if(account.provider == "google")
        {
          const dbUser = await dbconnect(collections.USERS);
          const userData = await dbUser.findOne({
            email: user.email
          });

          token.role = userData?.role;
          token.email=userData?.email;
        }else{
        token.role =user?.role;
        token.email =user?.email;
        }
     
      }
      return token;
    },

    async session({session, token, user}){

      if(token){
        session.user.role = token?.role;
        session.user.email = token?.email;
      }
      return session;
    },

 
  },

};

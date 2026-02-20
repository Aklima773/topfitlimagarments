"use client";
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const SocialButtons = () => {

    const searchParams = useSearchParams();
    console.log(searchParams.get("callbackUrl" || "/"))

    const handleSignIn = async()=>{

        const result = await signIn("google",{redirect: "false",
             callbackUrl: searchParams.get("callbackUrl" || "/")});
        console.log(result)
        if(result){
            Swal.fire("successfully login")
        }else{
            Swal.fire("login failed")
        }

    }
    return (
        <div>
             <button onClick={handleSignIn}
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>
        </div>
    );
};

export default SocialButtons;
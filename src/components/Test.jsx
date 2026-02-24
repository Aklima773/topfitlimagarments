"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const Test = () => {
const { data: session, status } = useSession();
    return (
        <div>
          {JSON.stringify(session?.user)}
        </div>
    );
};

export default Test;
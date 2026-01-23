import Link from 'next/link';
import React from 'react';
import { MdNoEncryptionGmailerrorred } from "react-icons/md";

const Error404 = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center space-y-7">
            <MdNoEncryptionGmailerrorred size={65} className="text-primary" />

            <h2 className="text-5xl font-bold text-primary">Page Not Found</h2>

            <Link href={"/"} className="btn btn-primary text-2xl">Go To Home</Link>
        </div>
    );
};

export default Error404;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto px-8 flex items-center gap-8">
      <div className="w-1/2 flex items-center justify-center py-8">
        <img className="h-[500px]" src="/images/auth.png" alt="" />
      </div>
      <div className="w-1/2 space-y-4 gap-4 max-w-[420px]">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p>Enter your details below</p>
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email or Phone" />
          <Input type="password" placeholder="Password" />
          <Button className="bg-red-500 font-bold">Create Account</Button>
        </form>
        <p className="text-center">
          Already have an Account?{" "}
          <Link href="/login" className="underline text-blue-500">
            Log In.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

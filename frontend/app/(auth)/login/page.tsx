"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/actions/authActions";
import { AppDispatch } from "@/store";
import { useRouter } from "next/navigation";

const page: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      dispatch(loginUser({ email, password }));
      router.push("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="container mx-auto px-8 flex items-center gap-8">
      <div className="w-1/2 flex items-center justify-center py-8">
        <img className="h-[500px]" src="/images/auth.png" alt="" />
      </div>
      <div className="w-1/2 space-y-4 gap-4 max-w-[420px]">
        <h1 className="text-3xl font-bold">Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <Button onClick={handleLogin} className="bg-red-500 font-bold">
              Log In
            </Button>
            <p>Forgot password</p>
          </div>
        </div>
        <p className="text-center">
          Don't have an Account?{" "}
          <Link href="/signup" className="underline text-blue-500">
            Create account.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

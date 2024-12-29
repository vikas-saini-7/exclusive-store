"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            <Button type="submit" className="bg-red-500 font-bold">
              Log In
            </Button>
            <p>Forgot password</p>
          </div>
        </form>
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

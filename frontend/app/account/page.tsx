"use client";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const page: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="container mx-auto px-8 mt-10 bg-white flex gap-8">
      <div className="w-1/3 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Account</h1>
        <div className="flex items-center mb-8">
          <img
            src="https://media.istockphoto.com/id/1273297923/vector/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-woman-avatar-profile.jpg?s=612x612&w=0&k=20&c=L6H2sqg64M11I7xqwJiMV5rZfaxzt9U0a9kfAX1xh7A="
            alt="Profile"
            className="w-20 h-20 rounded-full border p-2 mr-4"
          />
          <div className="text-left">
            <p className="text-2xl font-semibold text-gray-900 capitalize">
              {user?.name}
            </p>
          </div>
        </div>
        {user?.email && (
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Email:</label>
            <p className="text-gray-900">{user?.email}</p>
          </div>
        )}
        {user?.phone && (
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Phone:</label>
            <p className="text-gray-900">{user?.phone}</p>
          </div>
        )}
        <Link href="/account/settings/profile">
          <Button className="bg-red-500 font-bold">Edit Profile</Button>
        </Link>
      </div>
      <div className="w-1/3 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Orders</h1>
      </div>
      <div className="w-1/3 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          My Cancellations
        </h1>
      </div>
    </div>
  );
};

export default page;

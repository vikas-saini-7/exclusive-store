"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppDispatch, RootState } from "@/store";
import { updateProfile } from "@/store/actions/authActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const [name, setName] = React.useState(user?.name || "");
  const [email, setEmail] = React.useState(user?.email || "");
  const [phone, setPhone] = React.useState(user?.phone || "");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  const handleUpdateProfile = () => {
    dispatch(updateProfile({ name, email, phone }));
  };

  return (
    <div className="w-full max-w-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Profile</h2>
      <div className="w-full">
        <div className="mb-6">
          <Label className="block text-gray-700 font-semibold mb-2">
            Name:
          </Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-6">
          <Label className="block text-gray-700 font-semibold mb-2">
            Email:
          </Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-6">
          <Label className="block text-gray-700 font-semibold mb-2">
            Phone:
          </Label>
          <Input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <Button
          onClick={handleUpdateProfile}
          className="w-full bg-red-500 text-white p-3 rounded font-bold hover:bg-red-600 transition duration-300"
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
};

export default page;

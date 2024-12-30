"use client";
import { AppDispatch } from "@/store";
import { fetchUserProfile } from "@/store/actions/profileActions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const GetProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;
    dispatch(fetchUserProfile());
  });
  return null;
};

export default GetProfile;

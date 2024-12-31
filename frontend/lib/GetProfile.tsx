"use client";
import { AppDispatch } from "@/store";
import { fetchUserProfile } from "@/store/actions/authActions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const GetProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const user = localStorage.getItem("token");
    if (!user) return;
    dispatch(fetchUserProfile());
  });
  return null;
};

export default GetProfile;

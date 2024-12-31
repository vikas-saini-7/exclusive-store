import Link from "next/link";
import React from "react";

export default function settingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex container mx-auto px-8">
      <div className="w-1/4 border-r min-h-[250px] py-8">
        <ul className=" pl-5 space-y-2">
          <h1 className="font-bold text-xl mb-6">Settings</h1>
          <Link href="/account/settings/profile">
            <li className=" hover:text-red-500 cursor-pointer mb-2">Profile</li>
          </Link>
          <Link href="/account/settings/change-password">
            <li className=" hover:text-red-500 cursor-pointer mb-2">
              Change Password
            </li>
          </Link>
          <Link href="/account/settings/preferences">
            <li className=" hover:text-red-500 cursor-pointer mb-2">
              Preferences
            </li>
          </Link>
        </ul>
      </div>
      <div className=" w-full p-8">{children}</div>
    </div>
  );
}

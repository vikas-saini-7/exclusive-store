import {
  IconBox,
  IconHome,
  IconLogout,
  IconLogout2,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const AdminMenu: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-90px)] flex flex-col justify-between p-8 border-r">
      <ul className="space-y-1">
        <li className="hover:text-red-500 hover:bg-gray-100 py-2 px-3 rounded cursor-pointer">
          <Link href="/admin" className="flex items-center">
            <IconHome className="inline-block mr-2" /> Home
          </Link>
        </li>
        <li className="hover:text-red-500 hover:bg-gray-100 py-2 px-3 rounded cursor-pointer">
          <Link href="/admin/products" className="flex items-center">
            <IconBox className="inline-block mr-2" /> Products
          </Link>
        </li>
        <li className="hover:text-red-500 hover:bg-gray-100 py-2 px-3 rounded cursor-pointer">
          <Link href="/admin/customers" className="flex items-center">
            <IconUsers className="inline-block mr-2" /> Customers
          </Link>
        </li>
      </ul>
      <ul className="space-y-1">
        <li className="hover:text-red-500 hover:bg-gray-100 py-2 px-3 rounded cursor-pointer">
          <Link href="/admin/settings" className="flex items-center">
            <IconSettings className="inline-block mr-2" /> Settings
          </Link>
        </li>
        <li className="hover:text-white hover:bg-red-500 py-2 px-3 rounded cursor-pointer">
          <IconLogout2 className="inline-block mr-2" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;

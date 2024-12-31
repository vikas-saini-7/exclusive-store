import React from "react";
import { Input } from "../ui/input";
import {
  IconBell,
  IconNotification,
  IconPlus,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";
import { Button } from "../ui/button";

const AdminHeader: React.FC = () => {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between py-4 px-8 container mx-auto gap-4">
        <h1 className="font-bold text-xl">Exclusive Admin</h1>
        <div className="">
          <div className="relative">
            <Input
              placeholder="Search or type a command"
              className="bg-gray-100 border-0 w-72"
            />
            <span className="absolute right-3 top-3">
              <IconSearch size={18} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <IconBell size={24} />
          </Button>
          <Button className="bg-red-500 flex items-center font-bold">
            <IconPlus size={24} />
            Create
          </Button>
          <Button className="rounded-full" variant="outline">
            <IconUser />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

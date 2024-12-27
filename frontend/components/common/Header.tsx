import React from "react";
import { Input } from "../ui/input";
import {
  IconHeart,
  IconLuggage,
  IconSearch,
  IconShoppingBag,
} from "@tabler/icons-react";

const Header: React.FC = () => {
  return (
    <div className="border-b py-1 pt-3">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div>
          <h1 className="font-black text-xl">Exclusive</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-8 lg:gap-12">
            <li className="py-4">Home</li>
            <li className="py-4">Contact</li>
            <li className="py-4">About</li>
            <li className="py-4">Sign Up</li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              placeholder="What are you looking for?"
              className="bg-gray-100 border-0 w-72"
            />
            <span className="absolute right-3 top-3">
              <IconSearch size={18} />
            </span>
          </div>
          <IconHeart size={18} />
          <IconShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;

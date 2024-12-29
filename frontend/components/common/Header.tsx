import React from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import {
  IconHeart,
  IconLuggage,
  IconSearch,
  IconShoppingBag,
} from "@tabler/icons-react";
import { UserHeaderAccount } from "./UserHeaderAccount";

const Header: React.FC = () => {
  return (
    <div className="border-b py-1 pt-3">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="font-black text-xl">Exclusive</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-8 lg:gap-12">
            <li className="py-4">
              <Link href="/">Home</Link>
            </li>
            <li className="py-4">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="py-4">
              <Link href="/about">About</Link>
            </li>
            <li className="py-4">
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Input
              placeholder="What are you looking for?"
              className="bg-gray-100 border-0 w-72"
            />
            <span className="absolute right-3 top-3">
              <IconSearch size={18} />
            </span>
          </div>
          <Link href="/wishlist">
            <IconHeart size={24} />
          </Link>
          <Link href="/cart">
            <IconShoppingBag />
          </Link>
          <UserHeaderAccount />
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import React, { use, useEffect } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { IconHeart, IconSearch, IconShoppingBag } from "@tabler/icons-react";
import { UserHeaderAccount } from "./UserHeaderAccount";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { usePathname } from "next/navigation";
import { getCart } from "@/store/actions/cartActions";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const cart = useSelector((state: RootState) => state.cart);
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return;
  }

  useEffect(() => {
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [userId]);

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
            {!isAuthenticated && (
              <li className="py-4">
                <Link href="/signup">Sign Up</Link>
              </li>
            )}
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
          {isAuthenticated && (
            <Link href="/wishlist">
              <IconHeart size={24} />
            </Link>
          )}
          {isAuthenticated && (
            <Link href="/cart" className="relative">
              <IconShoppingBag />
              {cart.items.length > 0 && (
                <p className="absolute -top-3 -right-3 bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center">
                  {cart.items.length}
                </p>
              )}
            </Link>
          )}
          {isAuthenticated && <UserHeaderAccount />}
        </div>
      </div>
    </div>
  );
};

export default Header;

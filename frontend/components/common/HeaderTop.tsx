"use client";
import { IconChevronCompactDown, IconChevronDown } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderTop: React.FC = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return;
  }
  return (
    <div className="bg-black text-white">
      <div className=" container mx-auto px-8 flex items-center justify-between text-sm py-2">
        <div></div>
        <div className="flex items-center gap-4">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="underline font-bold">Shop Now!</p>
        </div>
        <div className="flex items-center gap-2">
          English
          <IconChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

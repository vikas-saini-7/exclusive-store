"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppDispatch } from "@/store";
import { logout } from "@/store/slices/authSlice";
import {
  IconLogout,
  IconLogout2,
  IconSettings,
  IconSettings2,
  IconShoppingBagCheck,
  IconStar,
  IconUser,
  IconUxCircle,
  IconX,
} from "@tabler/icons-react";
import { Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export function UserHeaderAccount() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full aspect-square" variant="outline">
          <IconUser />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-8 bg-black/70 backdrop-blur text-white border border-gray-500">
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          <Link href="/account">
            <DropdownMenuItem className="text-lg">
              <IconUser size={24} />
              Manage My Account
            </DropdownMenuItem>
          </Link>
          <Link href="/account/my-orders">
            <DropdownMenuItem className="text-lg">
              <IconShoppingBagCheck size={24} />
              My Order
            </DropdownMenuItem>
          </Link>
          <Link href="/account/my-cancellations">
            <DropdownMenuItem className="text-lg">
              <IconX size={24} />
              My Cancellations
            </DropdownMenuItem>
          </Link>
          <Link href="/account/my-reviews">
            <DropdownMenuItem className="text-lg">
              <IconStar size={24} />
              My Reviews
            </DropdownMenuItem>
          </Link>
          <Link href="/account/settings">
            <DropdownMenuItem className="text-lg">
              <IconSettings2 size={24} />
              Settings
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={handleLogout} className="text-lg">
            <IconLogout2 size={24} />
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

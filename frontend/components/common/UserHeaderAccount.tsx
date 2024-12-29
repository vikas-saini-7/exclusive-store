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
import {
  IconLogout,
  IconLogout2,
  IconShoppingBagCheck,
  IconStar,
  IconUser,
  IconUxCircle,
  IconX,
} from "@tabler/icons-react";
import { Icon } from "lucide-react";

export function UserHeaderAccount() {
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
          <DropdownMenuItem className="text-lg">
            <IconUser size={24} />
            Manage My Account
          </DropdownMenuItem>
          <DropdownMenuItem className="text-lg">
            <IconShoppingBagCheck size={24} />
            My Order
          </DropdownMenuItem>
          <DropdownMenuItem className="text-lg">
            <IconX size={24} />
            My Cancellations
          </DropdownMenuItem>
          <DropdownMenuItem className="text-lg">
            <IconStar size={24} />
            My Reviews
          </DropdownMenuItem>
          <DropdownMenuItem className="text-lg">
            <IconLogout2 size={24} />
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

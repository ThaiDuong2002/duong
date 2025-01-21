import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarItemsProps } from "@/interface";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavbarMenu = ({
  list,
  className,
}: {
  list: NavbarItemsProps;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Menu size={100} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            {list.items.map((item) => (
              <DropdownMenuItem key={item.id} className="uppercase">
                {item.icon}
                {item.id}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarMenu;

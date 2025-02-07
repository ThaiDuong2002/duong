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
import { MenuIcon } from "lucide-react";

const NavbarMenu = ({
  list,
  className,
}: {
  list: NavbarItemsProps;
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="[&_svg]:w-7 max-md:[&_svg]:w-5 [&_svg]:h-7 max-md:[&_svg]:h-5 max-md:size-8"
          >
            <MenuIcon />
            <span className="sr-only">Navbar Menu</span>
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

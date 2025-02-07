"use client";

import { Button } from "@/components/ui/button";
import { NavbarItemsProps } from "@/interface";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const NavbarItems = ({
  list,
  className,
}: {
  list: NavbarItemsProps;
  className?: string;
}) => {
  const t = useTranslations(list.id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-3 max-lg:gap-1 w-auto",
        className
      )}
    >
      {list.items.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          size="default"
          className="text-lg text-slate-600 dark:text-white"
          onClick={() => scrollToSection(item.id)}
        >
          {t(item.id)}
          <span className="sr-only">Navbar Items</span>
        </Button>
      ))}
    </div>
  );
};

export default NavbarItems;

"use client";

import { scrollToSection } from "@/functions";
import { cn } from "@/lib/utils";
import { NavbarItemsProps } from "@/types";
import { Button } from "@/ui/button";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const NavbarItems = ({
  list,
  className,
}: {
  list: NavbarItemsProps;
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const t = useTranslations(list.id);

  useEffect(() => {
    setActiveSection(list.items[0].id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 56;

      list.items.forEach((item) => {
        const element = document.getElementById(item.id);

        if (!element) return;

        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list.items]);

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
          className={
            `text-lg text-slate-600 dark:text-white` +
            (activeSection === item.id
              ? " bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700"
              : "")
          }
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

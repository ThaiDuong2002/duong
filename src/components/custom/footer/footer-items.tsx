"use client";

import { scrollToSection } from "@/functions";
import { FooterItemsProps } from "@/types";
import { Button } from "@/ui/button";
import { useTranslations } from "next-intl";

const FooterItems = ({ list }: { list: FooterItemsProps }) => {
  const t = useTranslations(list.id);

  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-1 w-auto h-auto">
      {list.items.map((item) => (
        <Button
          variant="ghost"
          size="default"
          key={item.id}
          className="hover:dark:bg-gray-700 text-slate-600 dark:text-white max-md:text-sm text-lg"
          onClick={() => scrollToSection(item.id)}
        >
          {t(item.id)}
          <span className="sr-only">Footer Items</span>
        </Button>
      ))}
    </div>
  );
};

export default FooterItems;

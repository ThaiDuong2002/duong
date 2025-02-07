"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/functions";
import { FooterItemsProps } from "@/interface";
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
          className="hover:dark:bg-gray-700 text-lg text-slate-600 max-md:text-sm dark:text-white"
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

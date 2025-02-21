"use client";

import SwitcherSelect from "@/components/custom/locale-switcher/switcher-select";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

const LocaleSwitcher = () => {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-0">
      <Globe className="w-6 max-md:w-5 h-6 max-md:h-5 text-muted-foreground" />
      <SwitcherSelect defaultValue={locale} label="Change language" />
    </div>
  );
};

export default LocaleSwitcher;

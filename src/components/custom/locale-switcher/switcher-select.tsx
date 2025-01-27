"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";

const SwitcherSelect = ({
  defaultValue,
  label,
}: {
  defaultValue: string;
  label: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const onSelected = (value: string) => {
    router.replace(
      {
        pathname,
      },
      { locale: value as Locale }
    );
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelected}>
      <SelectTrigger
        className="gap-1 bg-transparent border-none focus:ring-0 focus:ring-offset-0 w-auto h-8"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SwitcherSelect;

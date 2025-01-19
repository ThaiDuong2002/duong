import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import SwitcherSelect from "./switcher-select";

const LocaleSwitcher = () => {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-0">
      <Globe className="h-6 w-6 text-muted-foreground" />
      <SwitcherSelect defaultValue={locale} label="Change language" />
    </div>
  );
};

export default LocaleSwitcher;

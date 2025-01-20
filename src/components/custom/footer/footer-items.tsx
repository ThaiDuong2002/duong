import { Button } from "@/components/ui/button";
import { FooterItemsProps } from "@/interface";
import { useTranslations } from "next-intl";

const FooterItems = ({ list }: { list: FooterItemsProps }) => {
  const t = useTranslations(list.id);

  return (
    <div className="flex h-14 gap-1 items-center justify-between w-auto">
      {list.items.map((item) => (
        <Button
          variant="ghost"
          size="lg"
          key={item.id}
          className="text-slate-600 dark:text-white text-lg"
        >
          {t(item.id)}
        </Button>
      ))}
    </div>
  );
};

export default FooterItems;

import { Button } from "@/components/ui/button";
import { FooterItemsProps } from "@/interface";
import { useTranslations } from "next-intl";

const FooterItems = ({ list }: { list: FooterItemsProps }) => {
  const t = useTranslations(list.id);

  return (
    <div className="flex flex-col md:flex-row h-auto gap-1 items-center justify-between w-auto">
      {list.items.map((item) => (
        <Button
          variant="ghost"
          size="default"
          key={item.id}
          className="text-slate-600 dark:text-white text-lg"
        >
          {t(item.id)}
          <span className="sr-only">Footer Items</span>
        </Button>
      ))}
    </div>
  );
};

export default FooterItems;

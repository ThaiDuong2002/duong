import { Button } from "@/components/ui/button";
import { NavbarItemsProps } from "@/interface";
import { useTranslations } from "next-intl";

const NavbarItems = ({ list }: { list: NavbarItemsProps }) => {
  const t = useTranslations(list.id);

  return (
    <div className="flex items-center justify-center gap-3 max-lg:gap-1 w-auto">
      {list.items.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          size="default"
          className="text-slate-600 dark:text-white text-lg"
        >
          {t(item.id)}
        </Button>
      ))}
    </div>
  );
};

export default NavbarItems;

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

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 max-lg:gap-1 w-auto",
        className
      )}
    >
      {list.items.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          size="default"
          className="text-slate-600 dark:text-white text-lg"
        >
          {t(item.id)}
          <span className="sr-only">Navbar Items</span>
        </Button>
      ))}
    </div>
  );
};

export default NavbarItems;

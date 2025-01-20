import ModeToggle from "@/components/themes";
import I18nConstants from "@/constants/i18n";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locale-switcher";
import MaxWidthWrapper from "../max-width-wrapper";

const Navbar = () => {
  const navbar = I18nConstants.navbar;
  const t = useTranslations(navbar.id);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 gap-5 items-center justify-between border-b border-zinc-200">
          <b className="text-2xl">{t(navbar.title)}</b>
          <div className="flex gap-1">
            <LocaleSwitcher />
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

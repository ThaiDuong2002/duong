import ModeToggle from "@/components/themes";
import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../locale-switcher";
import MaxWidthWrapper from "../max-width-wrapper";
import NavbarItems from "./navbar-items";
import NavbarMenu from "./navbar-menu";

const Navbar = () => {
  const navbar = I18nConstants.navbar;
  const list = I18nConstants.list;
  const t = useTranslations(navbar.id);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 dark:border-gray-600 bg-white/75 dark:bg-black backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="w-full">
        <div className="flex h-14 gap-5 items-center justify-between max-lg:justify-center max-md:justify-between max-md:px-3">
          <b className="text-2xl max-lg:hidden max-md:flex">
            {t(navbar.title)}
          </b>
          <div className="flex gap-10 max-lg:gap-1">
            <NavbarItems list={list} className="max-md:hidden" />
            <div className="flex">
              <LocaleSwitcher />
              <ModeToggle />
            </div>
            <NavbarMenu list={list} className="md:hidden" />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

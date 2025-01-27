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
    <nav className="top-0 z-30 sticky inset-x-0 border-gray-200 dark:border-gray-600 bg-white/75 dark:bg-black backdrop-blur-lg border-b w-full h-14 transition-all">
      <MaxWidthWrapper className="w-full">
        <div className="flex justify-between max-md:justify-between max-lg:justify-center items-center gap-5 max-md:px-3 h-14">
          <b className="max-md:flex max-lg:hidden text-2xl">
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

"use client";

import LocaleSwitcher from "@/components/custom/locale-switcher";
import NavbarItems from "@/components/custom/navbar/navbar-items";
import NavbarMenu from "@/components/custom/navbar/navbar-menu";
import ModeToggle from "@/components/themes";
import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const navbar = I18nConstants.navbar;
  const list = I18nConstants.list;
  const t = useTranslations(navbar.id);

  return (
    <nav className="top-0 z-50 sticky inset-x-0 bg-white dark:bg-black backdrop-blur-lg border-gray-200 dark:border-gray-600 w-full h-14 transition-all">
      <div className="px-2.5 md:px-10 w-full">
        <div className="flex justify-between max-md:justify-between max-lg:justify-center items-center gap-5 h-14">
          <b className="max-lg:hidden max-md:flex max-md:text-xl text-2xl">
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
      </div>
    </nav>
  );
};

export default Navbar;

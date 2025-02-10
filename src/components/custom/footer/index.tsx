import { Button } from "@/components/ui/button";
import {
  I18nConstants,
  SOURCE_CODE_TOOLTIP,
  SOURCE_CODE_URL,
} from "@/constants";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import SocialButton from "../social-button";
import FooterItems from "./footer-items";

const Footer = () => {
  const footer = I18nConstants.footer;
  const list = I18nConstants.list;
  const t = useTranslations(footer.id);

  return (
    <footer className="flex flex-col justify-center items-center bg-white/75 dark:bg-black border-gray-200 border-y dark:border-gray-600 w-full h-[450px] md:h-64 text-slate-600 dark:text-white">
      <b className="text-3xl">{t(footer.title)}</b>
      <div className="mb-6" />
      <FooterItems list={list} />
      <div className="mb-6" />
      <h6 className="max-sm:text-xs">{t(footer.design)}</h6>
      <h6 className="mb-2 max-sm:text-xs">{t(footer.copyright)}</h6>
      <SocialButton
        href={SOURCE_CODE_URL}
        tooltip={SOURCE_CODE_TOOLTIP}
        button={
          <Button
            size="icon"
            variant="default"
            className="dark:hover:bg-gray-300 hover:bg-gray-700 rounded-full [&_svg]:w-5 max-sm:[&_svg]:w-3 [&_svg]:h-5 max-sm:[&_svg]:h-3 size-7 max-sm:size-5"
          >
            <Github className="fill-white dark:fill-black" />
            <span className="sr-only">github</span>
          </Button>
        }
      />
    </footer>
  );
};

export default Footer;

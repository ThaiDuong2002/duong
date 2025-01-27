import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";
import FooterItems from "./footer-items";

const Footer = () => {
  const footer = I18nConstants.footer;
  const list = I18nConstants.list;
  const t = useTranslations(footer.id);

  return (
    <footer className="flex flex-col justify-center items-center border-gray-200 border-y dark:border-gray-600 bg-white/75 dark:bg-black w-full h-[450px] md:h-64 text-slate-600 dark:text-white">
      <b className="text-3xl">{t(footer.title)}</b>
      <div className="mb-6" />
      <FooterItems list={list} />
      <div className="mb-6" />
      <h6>{t(footer.design)}</h6>
      <h6>{t(footer.copyright)}</h6>
    </footer>
  );
};

export default Footer;

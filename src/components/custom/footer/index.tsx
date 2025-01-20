import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";
import FooterItems from "./footer-items";

const Footer = () => {
  const footer = I18nConstants.footer;
  const list = I18nConstants.list;
  const t = useTranslations(footer.id);

  return (
    <footer className="bg-slate-200 dark:bg-slate-500 text-slate-600 dark:text-white h-80 flex flex-col items-center justify-center">
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

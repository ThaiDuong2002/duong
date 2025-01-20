import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-slate-200 dark:bg-slate-500 text-slate-600 dark:text-white h-80 flex flex-col items-center justify-center">
      <h3>{t("title")}</h3>
      <div className="mb-6" />
      <h6>{t("design")}</h6>
      <h6>{t("copyright")}</h6>
    </footer>
  );
};

export default Footer;

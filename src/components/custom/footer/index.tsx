import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-slate-500 h-80 flex flex-col items-center justify-center text-white">
      <h3>{t("title")}</h3>
      <div className="mb-6" />
      <h6>{t("design")}</h6>
      <h6>{t("copyright")}</h6>
    </footer>
  );
};

export default Footer;

import { useTranslations } from "next-intl";
import CopyButton from "../copy-button";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center h-20 bg-gray-200 dark:bg-gray-700">
          <span className="text-4xl text-slate-600 dark:text-white">
            {t("title")}
          </span>
        </div>
        <div className="flex items-start justify-center h-auto bg-white/75 dark:bg-black my-10">
          <div className="max-w-screen-sm mx-auto w-full px-10">
            Hi <CopyButton value="thaiduong032002@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

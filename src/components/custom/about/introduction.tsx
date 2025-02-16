import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Introduction = () => {
  const introduction = I18nConstants.about;
  const t = useTranslations(introduction.id);

  return (
    <div className="flex max-lg:flex-col justify-center items-center gap-10">
      <div className="bg-gray-900/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-900/10 ring-inset">
        <Image
          alt="Profile Image"
          src="/profile.png"
          width={268}
          height={400}
          quality={100}
          className="bg-white shadow-2xl p-2 rounded-md ring-1 ring-gray-900/10"
        />
      </div>
      <div className="flex flex-col justify-center items-start max-w-lg">
        <h1 className="mt-4 font-bold text-gray-900 dark:text-white max-sm:text-xl max-md:text-3xl text-4xl">
          {t(introduction.title)}
        </h1>
        <p className="mt-4 text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg">
          {t(introduction.paragraph1)}
        </p>
        <p className="mt-4 text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg">
          {t(introduction.paragraph2)}
        </p>
      </div>
    </div>
  );
};

export default Introduction;

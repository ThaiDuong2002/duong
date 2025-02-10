import { I18nConstants } from "@/constants";
import { GraduationCap, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

const Education = () => {
  const education = I18nConstants.education;
  const educationT = useTranslations(education.id);

  return (
    <div className="flex max-md:flex-col flex-wrap items-start gap-10">
      <div className="flex-1 justify-start gap-4">
        <div className="flex items-center gap-4 max-md:gap-2">
          <GraduationCap className="size-10 max-sm:size-7 text-blue-600 dark:text-blue-400" />
          <h1 className="font-bold text-gray-900 dark:text-white max-sm:text-xl max-md:text-3xl text-4xl">
            {educationT(education.title)}
          </h1>
        </div>
        <p className="mt-4 max-sm:mt-1 font-medium text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg leading-none">
          {educationT(education.university)}
        </p>
        <p className="mt-4 max-sm:mt-2 font-medium text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg leading-none">
          {educationT(education.degree)}
        </p>
        <p className="mt-4 max-sm:mt-2 font-medium text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg leading-none">
          {educationT(education.gpa)}
        </p>
        <p className="mt-4 max-sm:mt-2 font-medium text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg leading-none">
          {educationT(education.award1)}
        </p>
      </div>
      <div className="flex-1 justify-start items-start gap-4">
        <div className="flex items-center gap-4 max-md:gap-2">
          <Trophy className="size-10 max-sm:size-7 text-yellow-600 dark:text-yellow-400" />
          <h1 className="font-bold text-gray-900 dark:text-white max-sm:text-xl max-md:text-3xl text-4xl">
            {educationT(education.certificates)}
          </h1>
        </div>
        <p className="mt-4 max-sm:mt-2 font-medium text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg leading-none">
          {educationT(education.certificate1)}
        </p>
        <p className="mt-4 max-sm:mt-2 font-medium text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg leading-none">
          {educationT(education.certificate2)}
        </p>
      </div>
    </div>
  );
};

export default Education;

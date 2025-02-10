import { I18nConstants } from "@/constants";
import { GraduationCap, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";

const About = ({ id }: { id?: string }) => {
  const about = I18nConstants.about;
  const education = I18nConstants.education;
  const aboutT = useTranslations(about.id);
  const educationT = useTranslations(education.id);

  return (
    <div
      className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen"
      id={id}
    >
      <MaxWidthWrapper className="flex flex-col justify-center gap-10 max-md:gap-10 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-500 m-10 p-10 md:p-20 border rounded-xl max-w-screen-lg h-auto">
        <div className="flex max-md:flex-col justify-center items-center gap-10">
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
              {aboutT(about.title)}
            </h1>
            <p className="mt-4 text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg">
              {aboutT(about.paragraph1)}
            </p>
            <p className="mt-4 text-gray-700 max-md:text-md dark:text-gray-300 max-sm:text-sm text-lg">
              {aboutT(about.paragraph2)}
            </p>
          </div>
        </div>
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
      </MaxWidthWrapper>
    </div>
  );
};

export default About;

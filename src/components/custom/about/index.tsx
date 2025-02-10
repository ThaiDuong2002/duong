import { I18nConstants } from "@/constants";
import { GraduationCap, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";

const About = ({ id }: { id?: string }) => {
  const about = I18nConstants.about;
  const t = useTranslations(about.id);

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
            <h1 className="mt-4 font-bold text-gray-900 dark:text-white text-4xl">
              {t(about.title)}
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
              {t(about.paragraph1)}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
              {t(about.paragraph2)}
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col flex-wrap items-start gap-10">
          <div className="flex-1 justify-start gap-4">
            <div className="flex items-center gap-4">
              <GraduationCap
                size={40}
                className="text-blue-600 dark:text-blue-400"
              />
              <h1 className="font-bold text-gray-900 dark:text-white text-4xl">
                Education
              </h1>
            </div>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-300 text-lg leading-none">
              University of Science, VNU-HCM
            </p>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-300 text-lg leading-none">
              Bachelor of Software Engineering
            </p>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-300 text-lg leading-none">
              GPA: 3.48/4.0
            </p>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-300 text-lg leading-none">
              Awarded the university&apos;s Academic Encouragement Scholarship for
              the 2021-2022 academic year.
            </p>
          </div>
          <div className="flex-1 justify-start items-start gap-4">
            <div className="flex items-center gap-4">
              <Trophy
                size={40}
                className="text-yellow-600 dark:text-yellow-400"
              />
              <h1 className="font-bold text-gray-900 dark:text-white text-4xl">
                Certifications
              </h1>
            </div>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-300 text-lg leading-none">
              Microsoft Office Specialist (MOS) certification (2019)
            </p>
            <p className="mt-4 font-medium text-gray-700 dark:text-gray-300 text-lg leading-none">
              IELTS 6.0 (2025)
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default About;

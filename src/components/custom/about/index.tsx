import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";
import { GraduationCap } from "lucide-react";

const About = ({ id }: { id?: string }) => {
  const about = I18nConstants.about;
  const t = useTranslations(about.id);

  return (
    <div className="flex justify-center items-center min-h-screen" id={id}>
      <MaxWidthWrapper className="flex flex-col justify-center gap-10 max-md:gap-10 shadow-sm dark:shadow-gray-500 m-10 p-20 border rounded-xl max-w-screen-lg h-auto">
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
          <div className="flex flex-col justify-center items-center max-w-lg">
            <h1 className="mt-4 font-bold text-4xl">{t(about.title)}</h1>
            <p className="mt-4 text-lg">{t(about.paragraph1)}</p>
            <p className="mt-4 text-lg">{t(about.paragraph2)}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-4">
            <GraduationCap size={40} />
            <h1 className="font-bold text-4xl">Education</h1>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default About;

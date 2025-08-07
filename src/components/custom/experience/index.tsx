"use client";

import ExperienceCard from "@/components/custom/experience/experience-card";
import MaxWidthWrapper from "@/components/custom/max-width-wrapper";
import { Company01, Company02, Company03, I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";

const Experience = ({ id }: { id?: string }) => {
  const experience = I18nConstants.experience;
  const t = useTranslations(experience.id);

  return (
    <div
      className="flex flex-col justify-start items-center mx-10 pt-10 h-auto"
      id={id}
    >
      <h1 className="font-bold text-3xl">{t(experience.title)}</h1>
      <p className="mt-2 max-md:text-md max-sm:text-sm text-lg text-center">
        {t(experience.description)}
      </p>
      <MaxWidthWrapper className="mt-10">
        <div className="gap-14 grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-2">
          <ExperienceCard
            id={Company01.id}
            company={Company01.name}
            description={Company01.description}
            duration={Company01.duration}
            role={Company01.role}
            image={Company01.image}
          />
          <ExperienceCard
            id={Company02.id}
            company={Company02.name}
            description={Company02.description}
            duration={Company02.duration}
            role={Company02.role}
            image={Company02.image}
          />
          <ExperienceCard
            id={Company03.id}
            company={Company03.name}
            description={Company03.description}
            duration={Company03.duration}
            role={Company03.role}
            image={Company03.image}
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experience;

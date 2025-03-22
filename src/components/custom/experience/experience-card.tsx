"use client";

import { useTranslations } from "next-intl";
import Image from "next/legacy/image";

const ExperienceCard = ({
  id,
  company,
  description,
  duration,
  role,
  image,
}: {
  id: string;
  company: string;
  description: string;
  duration: string;
  role: string;
  image: string;
}) => {
  const t = useTranslations(id);

  return (
    <div className="shadow-lg dark:shadow-gray-700 border rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 transform">
      <div className="space-y-3 p-10">
        <div className="flex items-center space-x-5">
          <div className="w-16 max-sm:w-24 h-16 max-sm:h-24">
            <Image
              src={image}
              className="w-16 max-sm:w-20 h-16 max-sm:h-20"
              layout="responsive"
              objectFit="fill"
              width={64}
              height={64}
              alt={company}
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold max-sm:text-lg text-2xl">{role}</h3>
            <p className="max-w-full text-gray-700 text-md dark:text-gray-300 line-clamp-2">
              {company}
            </p>
          </div>
        </div>
        <p className="text-muted-foreground">{t(duration)}</p>
        <p>{t(description)}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

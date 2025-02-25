"use client";

import ImageCarousel from "@/components/custom/projects/image-carousel";
import { ProjectDetailProps } from "@/interface/components/project-detail";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";

const ProjectDetail = ({
  id,
  detailInfo,
  imageListOption = "single",
}: ProjectDetailProps) => {
  const t = useTranslations(id);

  return (
    <div className="flex flex-col">
      {imageListOption === "single" && detailInfo.imageList && (
        <ImageCarousel list={detailInfo.imageList} className="my-10" />
      )}
      <div className="flex flex-col gap-4 my-10">
        <div className="mx-10 max-sm:mx-0 lg:mx-32 border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-lg max-md:text-2xl text-3xl">
          {detailInfo.overview.name}
        </div>
        {detailInfo.overview.applications.map((application, index) => (
          <div className="flex flex-col" key={index}>
            {detailInfo.overview.applications.length > 1 &&
              imageListOption == "multiple" && (
                <div className="mx-10 max-sm:mx-0 lg:mx-32 font-semibold text-gray-900 dark:text-white max-sm:text-lg max-md:text-xl text-2xl italic">
                  {application.application}
                </div>
              )}
            <ul className="mx-10 max-sm:mx-0 lg:mx-32 text-gray-600 max-sm:text-sm max-md:text-lg text-xl list-disc list-inside">
              {application.overviewList.map((overview, index) => (
                <li key={index}>
                  {t(`${detailInfo.overview.id}.${overview}`)}
                </li>
              ))}
            </ul>
            {imageListOption === "multiple" && application.imageList && (
              <ImageCarousel
                list={application.imageList}
                className="mt-5 mb-10"
              />
            )}
          </div>
        ))}
        <div className="mx-10 max-sm:mx-0 lg:mx-32 border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-lg max-md:text-2xl text-3xl">
          {detailInfo.technologies.name}
        </div>
        {detailInfo.technologies.techs.map((tech, index) => (
          <div className="flex flex-col" key={index}>
            {detailInfo.technologies.techs.length > 1 &&
              imageListOption == "multiple" && (
                <div className="mx-10 max-sm:mx-0 lg:mx-32 font-semibold text-gray-900 dark:text-white max-sm:text-lg max-md:text-xl text-2xl italic">
                  {tech.application}
                </div>
              )}
            <ul className="mx-10 max-sm:mx-0 lg:mx-32 text-gray-600 max-sm:text-sm max-md:text-lg text-xl">
              {tech.techList.map((technologies, index) => (
                <li key={index}>
                  <p>
                    <span className="font-bold">{technologies.name}: </span>
                    {t(
                      `${detailInfo.technologies.id}.${technologies.description}`
                    )}
                  </p>
                </li>
              ))}
            </ul>
            {tech.techImages && (
              <div className="flex flex-wrap justify-center items-center gap-4 mx-10 max-sm:mx-0 lg:mx-32 mt-5">
                {tech.techImages.map((image, index) => (
                  <div className="relative w-1/4 h-auto" key={index}>
                    <Image
                      key={index}
                      src={image}
                      alt=""
                      width={16}
                      height={9}
                      quality={100}
                      objectFit="cover"
                      layout="responsive"
                      className="border-muted-foreground rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {detailInfo.architectures.architectureList && (
          <div className="mx-10 max-sm:mx-0 lg:mx-32 border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-lg max-md:text-2xl text-3xl">
            {detailInfo.architectures.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

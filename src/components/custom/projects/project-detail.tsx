"use client";

import ImageCarousel from "@/components/custom/projects/image-carousel";
import { ProjectDetailProps } from "@/interface/components/project-detail";
import { useTranslations } from "next-intl";

const ProjectDetail = ({
  id,
  detailInfo,
  imageListOption = "single",
}: ProjectDetailProps) => {
  const t = useTranslations(id);

  return (
    <div className="flex flex-col mt-10">
      {imageListOption === "single" && detailInfo.imageList && (
        <ImageCarousel list={detailInfo.imageList} className="my-10" />
      )}
      <div className="flex flex-col gap-4">
        <div className="mx-10 max-sm:mx-0 lg:mx-32 border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-lg max-md:text-2xl text-3xl">
          {detailInfo.overview.name}
        </div>
        {detailInfo.overview.applications.map((application, index) => (
          <div className="flex flex-col" key={index}>
            <div>
              <ul className="mx-10 max-sm:mx-0 lg:mx-32 text-gray-600 max-sm:text-sm max-md:text-lg text-xl list-disc list-inside">
                {application.overviewList.map((overview, index) => (
                  <li key={index}>
                    {t(`${detailInfo.overview.id}.${overview}`)}
                  </li>
                ))}
              </ul>
            </div>
            {imageListOption === "multiple" && application.imageList && (
              <ImageCarousel list={application.imageList} className="my-10" />
            )}
          </div>
        ))}
        <div className="mx-10 max-sm:mx-0 lg:mx-32 border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-lg max-md:text-2xl text-3xl">
          {detailInfo.technologies.name}
        </div>
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

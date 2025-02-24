"use client";

// import { useTranslations } from "next-intl";
import ImageCarousel from "@/components/custom/projects/image-carousel";

interface ProjectDetailProps {
  id: string;
  imageListOption?: "multiple" | "single";
  detailInfo: {
    imageList: string[];
    features: {
      id: string;
      name: string;
      applications: {
        application: string;
        featureList: string[];
      }[];
    };
    technologies: {
      id: string;
      name: string;
      techs: {
        application: string;
        techList: string[];
      }[];
      techImages: string[];
    };
    architectures: {
      id: string;
      name: string;
      architectureList:
        | {
            image: string;
            architectureList: string[];
          }[]
        | null;
    };
  };
}

const ProjectDetail = ({
  id,
  detailInfo,
  imageListOption = "single",
}: ProjectDetailProps) => {
  // const t = useTranslations(id);

  return (
    <div className="flex flex-col">
      {imageListOption === "single" && (
        <ImageCarousel list={detailInfo.imageList} className="my-10" />
      )}
      <div className="flex flex-col gap-4 mx-10 max-sm:mx-0 lg:mx-32">
        <div className="border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-sm max-md:text-xl text-2xl">
          {detailInfo.features.name}
        </div>
        <div className="border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-sm max-md:text-xl text-2xl">
          {detailInfo.technologies.name}
        </div>
        {detailInfo.architectures.architectureList && (
          <div className="border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-sm max-md:text-xl text-2xl">
            {detailInfo.features.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

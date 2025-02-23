"use client";

import { useTranslations } from "next-intl";

interface ProjectDetailProps {
  id: string;
}

const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const t = useTranslations(id);

  return (
    <div className="flex flex-col gap-4 mx-10 lg:mx-32">
      <div className="border-b-2 border-black font-bold text-gray-900 dark:text-white max-sm:text-sm max-md:text-xl text-2xl">
        {/* {detailInfo.features} */}
      </div>
    </div>
  );
};

export default ProjectDetail;

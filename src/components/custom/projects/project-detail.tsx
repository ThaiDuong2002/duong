"use client";

import { useTranslations } from "next-intl";

const ProjectDetail = ({ id }: { id: string }) => {
  const t = useTranslations(id);

  return (
    <div className="">
      <div className=""></div>
    </div>
  );
};

export default ProjectDetail;

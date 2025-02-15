import { PaintAppConstants } from "@/constants";
import { useTranslations } from "next-intl";
import ProjectCard from "../project-card";

const PaintApp = () => {
  const projects = PaintAppConstants;
  const t = useTranslations(projects.id);

  return (
    <ProjectCard
      imageSrc={PaintAppConstants.imageSrc}
      projectType={PaintAppConstants.type}
      title={PaintAppConstants.title}
      description={t(PaintAppConstants.description)}
      githubUrl={PaintAppConstants.githubUrl}
      multipleGit={PaintAppConstants.multipleGit}
    ></ProjectCard>
  );
};

export default PaintApp;

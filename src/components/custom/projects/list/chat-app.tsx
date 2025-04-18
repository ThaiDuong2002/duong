"use client";

import BadgeList from "@/components/custom/projects/badge-list";
import ContributorList from "@/components/custom/projects/contributor-list";
import ProjectCard from "@/components/custom/projects/project-card";
import ProjectDetail from "@/components/custom/projects/project-detail";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import { ProjectProps } from "@/types";
import { buttonVariants } from "@/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ChatApp = ({
  contributors,
  projects,
}: {
  contributors?: ContributorInfoDto[];
  projects: ProjectProps;
}) => {
  const t = useTranslations(projects.id);

  return (
    <ProjectCard
      title={projects.title}
      projectType={projects.type}
      imageSrc={projects.imageSrc}
      githubUrl={projects.githubUrl}
      multipleGit={projects.multipleGit}
      description={t(projects.description)}
    >
      <div className="flex flex-col gap-4 mx-10 max-sm:mx-2">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-8">
          <div className="flex-1">
            <h1 className="m-0 p-0 font-bold text-gray-900 dark:text-white max-sm:text-xl max-md:text-3xl text-4xl">
              {projects.title}
            </h1>
            <p className="my-4 text-muted-foreground max-sm:text-sm max-md:text-lg text-xl">
              {t(projects.description)}
            </p>
            <Link
              href={projects.githubUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub
            </Link>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div>
              <h1 className="font-bold text-gray-900 max-md:text-md dark:text-white max-sm:text-lg max-lg:text-2xl text-3xl">
                {projects.technologies}
              </h1>
            </div>
            <BadgeList badges={projects.techs} />
            <div>
              <h1 className="font-bold text-gray-900 max-md:text-md dark:text-white max-sm:text-lg max-lg:text-2xl text-3xl">
                {projects.contributors}
              </h1>
            </div>
            {contributors && <ContributorList contributors={contributors} />}
          </div>
        </div>
        <ProjectDetail id={projects.id} detailInfo={projects.detailInfo} />
      </div>
    </ProjectCard>
  );
};

export default ChatApp;

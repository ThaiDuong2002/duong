"use client";

import BadgeList from "@/components/custom/projects/badge-list";
import ContributorList from "@/components/custom/projects/contributor-list";
import ImageCarousel from "@/components/custom/projects/image-carousel";
import ProjectCard from "@/components/custom/projects/project-card";
import { HotelBookingConstants } from "@/constants";
import ContributorController from "@/data-fetching/controllers/contributor-controller";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import ErrorResponseDto from "@/data-fetching/dto/error-response-dto";
import { buttonVariants } from "@/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const HotelBooking = () => {
  const projects = HotelBookingConstants;
  const t = useTranslations(projects.id);

  const [contributors, setContributors] = useState<ContributorInfoDto[]>([]);

  useEffect(() => {
    ContributorController.getContributorsInfo(
      projects.owner,
      projects.repository
    ).then((response) => {
      if (response instanceof ErrorResponseDto) {
        console.error(response);
      } else {
        setContributors(response.getData());
      }
    });
  }, [projects.owner, projects.repository]);

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
            <p className="my-4 text-muted-foreground max-md:text-sm text-lg">
              {t(projects.description)}
            </p>
            <Link
              href={projects.githubUrl}
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
              <h1 className="font-bold text-gray-900 max-md:text-md dark:text-white max-sm:text-sm max-lg:text-lg text-xl">
                {projects.technologies}
              </h1>
            </div>
            <BadgeList badges={projects.techs} />
            <div>
              <h1 className="font-bold text-gray-900 max-md:text-md dark:text-white max-sm:text-sm max-lg:text-lg text-xl">
                {projects.contributors}
              </h1>
            </div>
            <ContributorList contributors={contributors} />
          </div>
        </div>
        <ImageCarousel list={projects.imageList} className="my-10" />
      </div>
    </ProjectCard>
  );
};

export default HotelBooking;

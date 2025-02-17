"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MyShopConstants } from "@/constants";
import ContributorController from "@/data-fetching/controllers/contributor-controller";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import ErrorResponseDto from "@/data-fetching/dto/error-response-dto";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "../project-card";

const MyShop = () => {
  const projects = MyShopConstants;
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
      <div className="flex flex-col gap-4 mx-10">
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
            <div className="flex-wrap space-y-2">
              {projects.techs.map((tech, index) => (
                <Badge key={index} variant="outline" className="mr-2 text-md">
                  {tech}
                </Badge>
              ))}
            </div>
            <div>
              <h1 className="font-bold text-gray-900 max-md:text-md dark:text-white max-sm:text-sm max-lg:text-lg text-xl">
                {projects.contributors}
              </h1>
            </div>
            <div className="flex flex-row gap-3">
              {contributors.length > 0 &&
                contributors.map((contributor, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src={contributor.getAvatarUrl()}
                            alt=""
                          />
                          <AvatarFallback>
                            {contributor.getAvatarUrl()}
                          </AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{contributor.getLogin()}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Carousel className="w-full max-w-[80%]">
            <CarouselContent>
              {projects.imageList.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center w-full h-full"
                >
                  <div className="relative pb-[56.25%] w-full h-0">
                    <Image
                      alt=""
                      src={image}
                      width={16}
                      height={9}
                      quality={100}
                      objectFit="cover"
                      layout="responsive"
                      className="border-muted-foreground rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {projects.imageList.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </ProjectCard>
  );
};

export default MyShop;

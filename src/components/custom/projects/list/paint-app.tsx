"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PaintAppConstants } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../project-card";

const PaintApp = () => {
  const projects = PaintAppConstants;
  const t = useTranslations(projects.id);

  return (
    <ProjectCard
      title={PaintAppConstants.title}
      projectType={PaintAppConstants.type}
      imageSrc={PaintAppConstants.imageSrc}
      githubUrl={PaintAppConstants.githubUrl}
      multipleGit={PaintAppConstants.multipleGit}
      description={t(PaintAppConstants.description)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-4">
          <div className="flex-1">
            <h1 className="m-0 p-0 font-bold text-gray-900 dark:text-white max-sm:text-xl max-md:text-3xl text-4xl">
              {PaintAppConstants.title}
            </h1>
            <p className="my-4 text-muted-foreground max-md:text-sm text-lg">
              {t(PaintAppConstants.description)}
            </p>
            <Link
              href={PaintAppConstants.githubUrl}
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
          <div className="flex-wrap flex-1 space-x-3">
            {projects.techs.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Carousel className="w-full max-w-[80%]">
            <CarouselContent>
              {PaintAppConstants.imageList.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="bg-gray-900/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-900/10 ring-inset">
                    <Image
                      alt=""
                      src={image}
                      width={1920}
                      height={1080}
                      quality={100}
                      className="bg-white shadow-2xl p-2 rounded-md ring-1 ring-gray-900/10"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {PaintAppConstants.imageList.length > 1 && (
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

export default PaintApp;

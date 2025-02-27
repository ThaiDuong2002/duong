"use client";

import MaxWidthWrapper from "@/components/custom/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { I18nConstants, projectConstants } from "@/constants";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import fetchData from "@/functions/fetch-data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Projects = ({ id }: { id?: string }) => {
  const projects = I18nConstants.projects;
  const t = useTranslations(projects.id);

  const [contributors, setContributors] = useState<
    Record<string, ContributorInfoDto[] | null>
  >({});

  useEffect(() => {
    const fetchPromises = projectConstants.map(({ constant }) =>
      fetchData(constant.owner, constant.repository).then((data) => ({
        id: constant.id,
        data,
      }))
    );

    Promise.allSettled(fetchPromises).then((results) => {
      const contributorsData: Record<string, ContributorInfoDto[] | null> =
        results.reduce((acc, result) => {
          if (result.status === "fulfilled") {
            acc[result.value.id] = result.value.data;
          } else {
            acc[result.reason.id] = null;
          }
          return acc;
        }, {} as Record<string, ContributorInfoDto[] | null>);

      setContributors(contributorsData);
    });
  }, []);

  return (
    <div
      className="flex flex-col justify-start items-center mx-10 pt-10 min-h-screen"
      id={id}
    >
      <h1 className="font-bold text-3xl">{t(projects.title)}</h1>
      <p className="mt-2 max-md:text-md max-sm:text-sm text-lg text-center">
        {t(projects.description)}
      </p>
      <MaxWidthWrapper className="mt-10">
        <Tabs
          defaultValue="all"
          className="flex flex-col justify-center items-center w-full"
        >
          <TabsList className="grid grid-cols-3 mb-10 w-[400px] max-sm:w-[300px]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Team">Team</TabsTrigger>
            <TabsTrigger value="Personal">Personal</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="gap-14 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
              {projectConstants.map(
                ({ constant, component: Component }, index) => (
                  <Component
                    key={index}
                    contributors={contributors[constant.id]!}
                    projects={constant as any}
                  />
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="Team">
            <div className="gap-14 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
              {projectConstants.map(
                ({ constant, component: Component, tag }, index) =>
                  tag === "Team" && (
                    <Component
                      key={index}
                      contributors={contributors[constant.id]!}
                      projects={constant as any}
                    />
                  )
              )}
            </div>
          </TabsContent>
          <TabsContent value="Personal">
            <div className="gap-14 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
              {projectConstants.map(
                ({ constant, component: Component, tag }, index) =>
                  tag === "Personal" && (
                    <Component
                      key={index}
                      contributors={contributors[constant.id]!}
                      projects={constant as any}
                    />
                  )
              )}
            </div>
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;

"use client";

import MaxWidthWrapper from "@/components/custom/max-width-wrapper";
import AdsManagement from "@/components/custom/projects/list/ads-management";
import CarBooking from "@/components/custom/projects/list/car-booking";
import ChatApp from "@/components/custom/projects/list/chat-app";
import CoffeeOrder from "@/components/custom/projects/list/coffee-order";
import FamFund from "@/components/custom/projects/list/fam-fund";
import HotelBooking from "@/components/custom/projects/list/hotel-booking";
import MyShop from "@/components/custom/projects/list/my-shop";
import OnlineAcademy from "@/components/custom/projects/list/online-academy";
import PaintApp from "@/components/custom/projects/list/paint-app";
import VideoSharing from "@/components/custom/projects/list/video-sharing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AdsManagementConstants,
  CarBookingConstants,
  ChatAppConstants,
  CoffeeOrderConstants,
  FamFundConstants,
  HotelBookingConstants,
  I18nConstants,
  MyShopConstants,
  OnlineAcademyConstants,
  PaintAppConstants,
  VideoSharingConstants,
} from "@/constants";
import ContributorInfoDto from "@/data-fetching/dto/contributor-info-dto";
import fetchData from "@/functions/fetch-data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const projectConstants = [
  { constant: FamFundConstants, component: FamFund, tag: "Team" },
  { constant: AdsManagementConstants, component: AdsManagement, tag: "Team" },
  { constant: CarBookingConstants, component: CarBooking, tag: "Team" },
  { constant: MyShopConstants, component: MyShop, tag: "Team" },
  { constant: PaintAppConstants, component: PaintApp, tag: "Team" },
  { constant: CoffeeOrderConstants, component: CoffeeOrder, tag: "Team" },
  { constant: HotelBookingConstants, component: HotelBooking, tag: "Team" },
  { constant: OnlineAcademyConstants, component: OnlineAcademy, tag: "Team" },
  { constant: VideoSharingConstants, component: VideoSharing, tag: "Personal" },
  { constant: ChatAppConstants, component: ChatApp, tag: "Personal" },
];

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

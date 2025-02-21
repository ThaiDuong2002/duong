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
import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";

const Projects = ({ id }: { id?: string }) => {
  const projects = I18nConstants.projects;
  const t = useTranslations(projects.id);

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
        <div className="gap-14 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
          <FamFund />
          <CarBooking />
          <AdsManagement />
          <PaintApp />
          <MyShop />
          <CoffeeOrder />
          <HotelBooking />
          <OnlineAcademy />
          <VideoSharing />
          <ChatApp />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;

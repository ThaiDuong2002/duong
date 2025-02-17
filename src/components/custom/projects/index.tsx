import { I18nConstants } from "@/constants";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "../max-width-wrapper";
import MyShop from "./list/my-shop";
import PaintApp from "./list/paint-app";
import ProjectCard from "./project-card";
import HotelBooking from "./list/hotel-booking";
import ChatApp from "./list/chat-app";

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
          <PaintApp />
          <MyShop />
          <HotelBooking />
          <ProjectCard
            imageSrc="/projects/online-academy/online-academy.png"
            projectType="Personal"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptate neque sapiente suscipit facere porro a. Consequuntur est consequatur provident unde, error, nihil blanditiis esse, quibusdam dicta consectetur explicabo doloremque."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptate neque sapiente suscipit facere porro a. Consequuntur est consequatur provident unde, error, nihil blanditiis esse, quibusdam dicta consectetur explicabo doloremque."
            githubUrl="https://github.com"
            multipleGit
          ></ProjectCard>
          <ProjectCard
            imageSrc="/projects/video-sharing/video-sharing.png"
            projectType="Personal"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptate neque sapiente suscipit facere porro a. Consequuntur est consequatur provident unde, error, nihil blanditiis esse, quibusdam dicta consectetur explicabo doloremque."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptate neque sapiente suscipit facere porro a. Consequuntur est consequatur provident unde, error, nihil blanditiis esse, quibusdam dicta consectetur explicabo doloremque."
            githubUrl="https://github.com"
            multipleGit
          ></ProjectCard>
          <ChatApp />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;

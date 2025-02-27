import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";
import { ProjectInterface } from "@/interface";

const OnlineAcademyConstants: ProjectInterface = {
  id: "online-academy",
  title: "Online Academy - Education Courses Platform",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/online-academy/online-academy.png",
  githubUrl: githubUrl(owner[0].name, repositories[10].name),
  apiContributors: apiContributors(owner[0].name, repositories[10].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[10].name,
  techs: [
    "Javascript",
    "Handlebars",
    "CSS",
    "HTML",
    "Bootstrap",
    "PassportJS",
    "NodeJS",
    "Express",
    "MongoDB",
    "Mongoose",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
  detailInfo: {
    imageList: ["/projects/online-academy/online-academy.png"],
    overview: {
      id: "overview",
      name: "Overview",
      applications: [
        {
          id: "frontend",
          application: "Frontend",
          overviewList: ["overview-01", "overview-02", "overview-03"],
          imageList: null,
        },
      ],
    },
    technologies: {
      id: "technologies",
      name: "Technologies",
      techs: [
        {
          id: "frontend",
          application: "Frontend",
          techList: [
            {
              name: "Handlebars",
              description: "tech-01",
            },
            {
              name: "Bootstrap",
              description: "tech-02",
            },
            {
              name: "MongoDB",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/handlebars.png",
            "/technologies/bootstrap.png",
            "/technologies/mongo-db.png",
          ],
        },
      ],
    },
    architectures: {
      id: "architectures",
      name: "Architectures",
      architectureList: null,
    },
  },
};

export default OnlineAcademyConstants;
export type OnlineAcademyConstantsType = typeof OnlineAcademyConstants;

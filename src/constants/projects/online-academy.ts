import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";

const OnlineAcademyConstants = {
  id: "online-academy",
  title: "Online Academy - Education Courses Platform",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/online-academy/online-academy.png",
  imageList: ["/projects/online-academy/online-academy.png"],
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
};

export default OnlineAcademyConstants;

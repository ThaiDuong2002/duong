import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const CoffeeOrderConstants = {
  id: "coffee-order", 
  title: "Coffee Order Application",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/chat-app/chat-app.png",
  imageList: ["/projects/chat-app/chat-app.png"],
  githubUrl: githubUrl(owner[3].name, repositories[9].name),
  apiContributors: apiContributors(owner[3].name, repositories[9].name),
  multipleGit: false,
  owner: owner[3].name,
  repository: repositories[9].name,
  techs: [
    "Javascript",
    "ReactJS",
    "Firebase",
    "Firebase Storage",
    "HTML",
    "Sass",
    "CSS",
    "NodeJS",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default CoffeeOrderConstants;

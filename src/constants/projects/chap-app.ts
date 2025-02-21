import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";

const ChatAppConstants = {
  id: "chat-app",
  title: "Chat Application - Messaging System",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/chat-app/chat-app.png",
  imageList: ["/projects/chat-app/chat-app.png"],
  githubUrl: githubUrl(owner[0].name, repositories[12].name),
  apiContributors: apiContributors(owner[0].name, repositories[12].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[12].name,
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

export default ChatAppConstants;

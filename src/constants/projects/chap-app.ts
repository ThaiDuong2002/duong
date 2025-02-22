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
  detailInfo: {
    name: "overview",
    technologies: "Technologies",
    features: "Features",
    architecture: "Architecture",
    overview: [
      {
        role: "client",
        features: ["feature-01", "feature-02", "feature-03", "feature-04"],
        techInfo: [
          "tech-01",
          "tech-02",
          "tech-03",
          "tech-04",
          "tech-05",
          "tech-06",
          "tech-07",
        ],
        techImages: [
          "/technologies/react-js.png",
          "/technologies/firebase.png",
          "/technologies/node-js.png",
        ],
      },
    ],
    architectureImages: [],
  },
};

export default ChatAppConstants;

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
    imageList: ["/projects/chat-app/chat-app.png"],
    overview: {
      id: "overview",
      name: "Overview",
      applications: [
        {
          application: "User",
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
          application: "User",
          techList: [
            {
              name: "Node.Js",
              description: "tech-01",
            },
            {
              name: "React.Js",
              description: "tech-02",
            },
            {
              name: "Firebase",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/firebase.png",
            "/technologies/node-js.png",
            "/technologies/react-js.png",
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

export default ChatAppConstants;

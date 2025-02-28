import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";
import { ProjectInterface } from "@/interface";

const CoffeeOrderConstants: ProjectInterface = {
  id: "coffee-order",
  title: "Infinity - Coffee Order Application",
  description: "description",
  type: "Mobile Application",
  imageSrc: "/projects/coffee-order/coffee-order.png",
  githubUrl: githubUrl(owner[3].name, repositories[9].name),
  apiContributors: apiContributors(owner[3].name, repositories[9].name),
  multipleGit: false,
  owner: owner[3].name,
  repository: repositories[9].name,
  techs: [
    "Kotlin",
    "Javascript",
    "Android Studio",
    "Firebase Clound Messaging",
    "MySQL",
    "PassportJS",
    "ExpressJS",
    "Cloudinary",
    "NodeJS",
    "MVVM Architecture",
    "Socket.IO",
    "Retrofit",
    "ZaloPay API",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
  detailInfo: {
    imageList: [
      "/projects/coffee-order/coffee-order.png",
      "/projects/coffee-order/coffee-order-1.png",
      "/projects/coffee-order/coffee-order-2.png",
      "/projects/coffee-order/coffee-order-3.png",
      "/projects/coffee-order/coffee-order-4.png",
    ],
    overview: {
      id: "overview",
      name: "Overview",
      applications: [
        {
          id: "frontend",
          application: "Frontend",
          overviewList: [
            "overview-01",
            "overview-02",
            "overview-03",
            "overview-04",
            "overview-05",
          ],
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
              name: "Android Studio",
              description: "tech-01",
            },
            {
              name: "ZaloPay API",
              description: "tech-02",
            },
          ],
          techImages: [
            "/technologies/android-studio.png",
            "/technologies/zalo-pay.png",
          ],
        },
        {
          id: "backend",
          application: "Backend",
          techList: [
            {
              name: "Express.Js",
              description: "tech-01",
            },
            {
              name: "Node.Js",
              description: "tech-02",
            },
            {
              name: "MySQL",
              description: "tech-03",
            },
            {
              name: "Socket.IO",
              description: "tech-04",
            },
          ],
          techImages: [
            "/technologies/express-js.png",
            "/technologies/node-js.png",
            "/technologies/mysql.png",
            "/technologies/socket-io.png",
          ],
        },
      ],
    },
    architectures: {
      id: "architectures",
      name: "Architectures",
      architectureList: [
        {
          id: "system",
          image: "/architectures/coffee-order/system.png",
          application: "System",
          architectureList: null,
        },
      ],
    },
  },
};

export default CoffeeOrderConstants;
export type CoffeeOrderConstantsType = typeof CoffeeOrderConstants;

import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const CoffeeOrderConstants = {
  id: "coffee-order",
  title: "Infinity - Coffee Order Application",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/coffee-order/coffee-order.png",
  imageList: [
    "/projects/coffee-order/coffee-order.png",
    "/projects/coffee-order/coffee-order-1.png",
    "/projects/coffee-order/coffee-order-2.png",
    "/projects/coffee-order/coffee-order-3.png",
    "/projects/coffee-order/coffee-order-4.png",
  ],
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
};

export default CoffeeOrderConstants;

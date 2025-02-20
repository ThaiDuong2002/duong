import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const AdsManagementConstants = {
  id: "ads-management",
  title: "Advertisement Management System",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/ads-management/ads-management.png",
  imageList: [
    "/projects/ads-management/ads-management.png",
    "/projects/ads-management/ads-management-officials.png",
    "/projects/ads-management/ads-management-residents.png",
  ],
  githubUrl: githubUrl(owner[3].name, repositories[7].name),
  apiContributors: apiContributors(owner[3].name, repositories[7].name),
  multipleGit: false,
  owner: owner[3].name,
  repository: repositories[7].name,
  techs: [
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Mongoose",
    "Material UI",
    "ReactJS",
    "OpenStreetMap",
    "Leaflet",
    "Leaflet MarkerCluster",
    "Event Driven Programming",
    "Docker",
    "Socket.IO",
    "Jenkins",
    "CI/CD",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default AdsManagementConstants;

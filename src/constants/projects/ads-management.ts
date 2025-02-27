import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";

const AdsManagementConstants = {
  id: "ads-management",
  title: "Advertisement Management System",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/ads-management/ads-management.png",
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
  detailInfo: {
    imageList: [
      "/projects/ads-management/ads-management.png",
      "/projects/ads-management/ads-management-officials.png",
      "/projects/ads-management/ads-management-residents.png",
    ],
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
              name: "React.Js",
              description: "tech-01",
            },
            {
              name: "Material UI",
              description: "tech-02",
            },
            {
              name: "Leaflet.Js",
              description: "tech-03",
            },
          ],
          techImages: [
            "/technologies/react-js.png",
            "/technologies/material-ui.png",
            "/technologies/leaflet-js.png",
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
              name: "MongoDB",
              description: "tech-03",
            },
            {
              name: "Socket.IO",
              description: "tech-04",
            },
            {
              name: "Jenkins",
              description: "tech-05",
            },
            {
              name: "Docker",
              description: "tech-06",
            },
          ],
          techImages: [
            "/technologies/express-js.png",
            "/technologies/node-js.png",
            "/technologies/mongo-db.png",
            "/technologies/socket-io.png",
            "/technologies/jenkins.png",
            "/technologies/docker.png",
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

export default AdsManagementConstants;
export type AdsManagementConstantsType = typeof AdsManagementConstants;

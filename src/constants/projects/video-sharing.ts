import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";

const VideoSharingConstants = {
  id: "video-sharing",
  title: "Video Sharing Platform",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/video-sharing/video-sharing.png",
  githubUrl: githubUrl(owner[0].name, repositories[13].name),
  apiContributors: apiContributors(owner[0].name, repositories[13].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[13].name,
  techs: [
    "Javascript",
    "NodeJS",
    "ReactJS",
    "Material UI",
    "Axios",
    "Redux Persist",
    "Styled Components",
    "Firebase",
    "Express",
    "NodeJS",
    "MongoDB",
    "Mongoose",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
  detailInfo: {
    imageList: ["/projects/video-sharing/video-sharing.png"],
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
              name: "Material UI",
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
            "/technologies/material-ui.png",
            "/technologies/react-js.png",
            "/technologies/firebase.png",
          ],
        },
        {
          id: "backend",
          application: "Backend",
          techList: [
            {
              name: "Express",
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
          ],
          techImages: [
            "/technologies/express-js.png",
            "/technologies/node-js.png",
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

export default VideoSharingConstants;

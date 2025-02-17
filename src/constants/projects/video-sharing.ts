import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const VideoSharingConstants = {
  id: "video-sharing",
  title: "Video Sharing Platform",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/video-sharing/video-sharing.png",
  imageList: ["/projects/video-sharing/video-sharing.png"],
  githubUrl: githubUrl(owner[0].name, repositories[13].name),
  apiContributors: apiContributors(owner[0].name, repositories[13].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[13].name,
  techs: [
    "Javascript",
    "ReactJS",
    "Material-UI",
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
};

export default VideoSharingConstants;

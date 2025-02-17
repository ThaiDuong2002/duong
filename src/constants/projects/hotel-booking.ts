import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "../contributors";

const HotelBookingConstants = {
  id: "hotel-booking",
  title: "Hotel Booking - Reservation System",
  description: "description",
  type: "Web Application",
  imageSrc: "/projects/hotel-booking/hotel-booking-search.png",
  imageList: [
    "/projects/hotel-booking/hotel-booking-search.png",
    "/projects/hotel-booking/hotel-booking-detail.png",
    "/projects/hotel-booking/hotel-booking-list.png",
  ],
  githubUrl: githubUrl(owner[2].name, repositories[11].name),
  apiContributors: apiContributors(owner[2].name, repositories[11].name),
  multipleGit: false,
  owner: owner[2].name,
  repository: repositories[11].name,
  techs: [
    "Javascript",
    "ReactJS",
    "Fontawesome",
    "Axios",
    "HTML",
    "CSS",
    "Express",
    "NodeJS",
    "MongoDB",
    "Mongoose",
  ],
  technologies: "Technologies",
  contributors: "Contributors",
};

export default HotelBookingConstants;

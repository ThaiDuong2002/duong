import AdsManagement from "@/components/custom/projects/list/ads-management";
import CarBooking from "@/components/custom/projects/list/car-booking";
import ChatApp from "@/components/custom/projects/list/chat-app";
import CoffeeOrder from "@/components/custom/projects/list/coffee-order";
import FamFund from "@/components/custom/projects/list/fam-fund";
import HotelBooking from "@/components/custom/projects/list/hotel-booking";
import MyShop from "@/components/custom/projects/list/my-shop";
import OnlineAcademy from "@/components/custom/projects/list/online-academy";
import PaintApp from "@/components/custom/projects/list/paint-app";
import VideoSharing from "@/components/custom/projects/list/video-sharing";
import {
  AdsManagementConstants,
  CarBookingConstants,
  ChatAppConstants,
  CoffeeOrderConstants,
  FamFundConstants,
  HotelBookingConstants,
  MyShopConstants,
  OnlineAcademyConstants,
  PaintAppConstants,
  VideoSharingConstants,
} from "@/constants";

const projectConstants = [
  { constant: FamFundConstants, component: FamFund, tag: "Team" },
  { constant: AdsManagementConstants, component: AdsManagement, tag: "Team" },
  { constant: CarBookingConstants, component: CarBooking, tag: "Team" },
  { constant: MyShopConstants, component: MyShop, tag: "Team" },
  { constant: PaintAppConstants, component: PaintApp, tag: "Team" },
  { constant: CoffeeOrderConstants, component: CoffeeOrder, tag: "Team" },
  { constant: HotelBookingConstants, component: HotelBooking, tag: "Team" },
  { constant: OnlineAcademyConstants, component: OnlineAcademy, tag: "Team" },
  { constant: VideoSharingConstants, component: VideoSharing, tag: "Personal" },
  { constant: ChatAppConstants, component: ChatApp, tag: "Personal" },
];

export default projectConstants;

import {
  EMAIL_ADDRESS,
  GITHUB,
  GITHUB_URL,
  LINKEDIN,
  LINKEDIN_URL,
  PHONE_NUMBER,
  SOURCE_CODE_TOOLTIP,
  SOURCE_CODE_URL,
} from "@/constants/components/contact";
import { COPY } from "@/constants/components/copy-button";
import {
  apiContributors,
  githubUrl,
  owner,
  repositories,
} from "@/constants/contributors";
import ErrorConstants from "@/constants/errors";
import { MOBILE_BREAKPOINT } from "@/constants/hooks/mobile";
import { TOAST_LIMIT, TOAST_REMOVE_DELAY } from "@/constants/hooks/toast";
import HttpMessage from "@/constants/http/message";
import HttpMethod from "@/constants/http/method";
import HttpStatus from "@/constants/http/status";
import { I18nConstants, localeConstants } from "@/constants/i18n";
import AdsManagementConstants, {
  AdsManagementConstantsType,
} from "@/constants/projects/ads-management";
import CarBookingConstants, {
  CarBookingConstantsType,
} from "@/constants/projects/car-booking";
import ChatAppConstants, {
  ChatAppConstantsType,
} from "@/constants/projects/chap-app";
import CoffeeOrderConstants, {
  CoffeeOrderConstantsType,
} from "@/constants/projects/coffee-order";
import FamFundConstants, {
  FamFundConstantsType,
} from "@/constants/projects/fam-fund";
import HotelBookingConstants, {
  HotelBookingConstantsType,
} from "@/constants/projects/hotel-booking";
import MyShopConstants, {
  MyShopConstantsType,
} from "@/constants/projects/my-shop";
import OnlineAcademyConstants, {
  OnlineAcademyConstantsType,
} from "@/constants/projects/online-academy";
import PaintAppConstants, {
  PaintAppConstantsType,
} from "@/constants/projects/paint-app";
import VideoSharingConstants, {
  VideoSharingConstantsType,
} from "@/constants/projects/video-sharing";

export {
  AdsManagementConstants,
  apiContributors,
  CarBookingConstants,
  ChatAppConstants,
  CoffeeOrderConstants,
  COPY,
  EMAIL_ADDRESS,
  ErrorConstants,
  FamFundConstants,
  GITHUB,
  GITHUB_URL,
  githubUrl,
  HotelBookingConstants,
  HttpMessage,
  HttpMethod,
  HttpStatus,
  I18nConstants,
  LINKEDIN,
  LINKEDIN_URL,
  localeConstants,
  MOBILE_BREAKPOINT,
  MyShopConstants,
  OnlineAcademyConstants,
  owner,
  PaintAppConstants,
  PHONE_NUMBER,
  repositories,
  SOURCE_CODE_TOOLTIP,
  SOURCE_CODE_URL,
  TOAST_LIMIT,
  TOAST_REMOVE_DELAY,
  VideoSharingConstants,
};
export type {
  AdsManagementConstantsType,
  CarBookingConstantsType,
  ChatAppConstantsType,
  CoffeeOrderConstantsType,
  FamFundConstantsType,
  HotelBookingConstantsType,
  MyShopConstantsType,
  OnlineAcademyConstantsType,
  PaintAppConstantsType,
  VideoSharingConstantsType,
};

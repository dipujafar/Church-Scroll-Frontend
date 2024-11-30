import { StaticImageData } from "next/image";

export type TChurchData = {
  image: string[];
  name: string;
  _id: number;
};

export type TEvent = {
  _id: number;
  name: string;
  hostName: string;
  location: string;
  date: string;
  image: string[];
};

export type TMember = {
  _id: number;
  name: string;
  designation: string;
  churchName: string;
  expert: string;
  image: string;
};
export type TResources = {
  _id: number;
  name: string;
  creator: string;
  churchName: string;
  services: string;
  image: string;
};

export type TPrayerRequest = {
  _id: number;
  image: string;
  name: string;
  startTime: string;
  endTime: string;
  date: string;
  prayerName: string;
  description: string;
  churchName?: string;
};

export type TWork = {
  _id: number;
  title: string;
  description?: string;
  image: string[];
};
export type TActivity = {
  _id: number;
  title: string;
  description: string;
  image: string[];
};

export type TReview = {
  _id: number;
  image: string;
  name: string;
  time: string;
  comment: string;
};

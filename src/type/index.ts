import { StaticImageData } from "next/image";

export type churchData = {
  image: string | StaticImageData;
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

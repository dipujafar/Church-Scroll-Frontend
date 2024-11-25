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

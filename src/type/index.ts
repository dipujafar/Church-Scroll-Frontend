import { StaticImageData } from "next/image";

export type churchData = {
  image: string | StaticImageData;
  name: string;
  _id: number;
};

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "submit" | "button";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacture: string) => void;
}

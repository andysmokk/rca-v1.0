// import axios from "axios";

import { CarProps } from "@/types";

export const fetchCars = async () => {
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CARS_NINJAS_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars2?model=corolla`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  // console.log("🚀 ~ fetchCars ~ result:", result);

  return result;
  // const options = {
  //   method: "GET",
  //   url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars1",
  //   params: { model: "corolla" },
  //   headers: {
  //     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CARS_NINJAS_RAPID_API_KEY || "",
  //     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  //   },
  // };
  // try {
  //   const response = await axios.get(
  //     "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars1",
  //     {
  //       params: { model: "corolla" },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           process.env.NEXT_PUBLIC_CARS_NINJAS_RAPID_API_KEY || "",
  //         "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  //       },
  //     }
  //   );
  //   console.log("🚀 ~ fetchCars ~ response.data:", response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error(error);
  // }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelTear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

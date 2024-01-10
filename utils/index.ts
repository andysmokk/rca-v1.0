import axios from "axios";

export const fetchCars = async () => {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars1",
    params: { model: "corolla" },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CARS_NINJAS_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

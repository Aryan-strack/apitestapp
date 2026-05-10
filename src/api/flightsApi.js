import axios from 'axios';

const BASE_URL = 'https://sky-scrapper.p.rapidapi.com';

export const searchFlights = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/flights/searchFlights`,
      {
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
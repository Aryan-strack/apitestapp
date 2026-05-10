const BASE_URL = 'https://booking-com15.p.rapidapi.com';

export const searchCars = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/cars/searchCarRentals`,
      {
        params: {
          pick_up_latitude: '40.6397018432617',
          pick_up_longitude: '-73.77890014648438',
          drop_off_latitude: '40.6397018432617',
          drop_off_longitude: '-73.77890014648438',
          pick_up_date: '2026-06-10',
          drop_off_date: '2026-06-15',
          pick_up_time: '10:00',
          drop_off_time: '10:00',
          currency_code: 'USD',
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
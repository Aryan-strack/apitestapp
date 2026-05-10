const BASE_URL = 'https://booking-com15.p.rapidapi.com';

export const searchHotels = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/hotels/searchHotels`,
      {
        params: {
          dest_id: '-2092174',
          search_type: 'CITY',
          arrival_date: '2026-06-10',
          departure_date: '2026-06-15',
          adults: '2',
          room_qty: '1',
          page_number: '1',
          units: 'metric',
          temperature_unit: 'c',
          languagecode: 'en-us',
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
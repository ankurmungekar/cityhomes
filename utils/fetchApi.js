import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url, params) => {
  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'Qbw6vYzaB0mshmfV3fHZut5HdER2p1ZXPk0jsn8W7uDSeLR4tP'
    }
  };
  const { data } = await axios.request(options);
  return data;
}
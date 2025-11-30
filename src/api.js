import axios from "axios";

const BASE_URL = "https://backend-cryptostock.fly.dev";

export const getCryptoData = async (coin_id) => {
  const response = await axios.get(`${BASE_URL}/get-crypto-data?coin_id=${coin_id}`);
  return response.data.message.data[coin_id];
};

export const getCryptoSentiment = async (coin_id, days) => {
  const response = await axios.put(`${BASE_URL}/put-crypto-sentiment?coin_id=${coin_id}&days=${days}`);
  return response.data.response;
};

export const getCryptoHistorical = async (coin_id, days) => {
  const response = await axios.get(`${BASE_URL}/get-crypto-historical?coin_id=${coin_id}&days=${days}`);
  return response.data.message.data.prices;
};

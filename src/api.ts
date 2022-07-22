import axios from "axios";

// https://membox-v7-staging.herokuapp.com/v1/items?limit=9999

const api = axios.create({
  baseURL: "https://membox-v7-staging.herokuapp.com/v1",
});

export const getItems = async () => {
  const limit = 999;
  const res = await api.get(`/items?limit=${limit}`);
  return res.data;
};

import axios from "axios";

// https://membox-v7-staging.herokuapp.com/v1/items?limit=9999

const api = axios.create({
  baseURL: "https://membox-v7-staging.herokuapp.com/v1",
});

export const getItems = async () => {
  const limit = 999;
  try {
    const res = await api.get(`/items?limit=${limit}`);

    // just to check and validate if it's valid json (or if we had a wrong URL or something, which still returns a 200 but with an HTML page showing error)
    if (typeof res.data !== "object")
      throw new Error("Unexpected data response from fetch items");

    return res.data;
  } catch (error) {
    console.error("Error fetching data..", error);
    throw new Error("Error fetching data from server");
  }
};

export const getTags = async () => {
  try {
    const res = await api.get("/tags");
    return res.data;
  } catch (error) {
    console.error("Error fetching data..", error);
    throw new Error("Error fetching tags from server");
  }
};

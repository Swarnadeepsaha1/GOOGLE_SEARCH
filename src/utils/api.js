import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyCQe-F8h3bDO1lxndKA2arTte1L-thxa0A",
  cx: "a04a2850c63b74e28",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};

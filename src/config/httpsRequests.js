import axios from "axios";
import { BASE_API } from "./api";

export const makeGetRequest = ({ API_URL, queryParams }) => {
  return axios.get(BASE_API + API_URL, {
    params: queryParams,
  });
};

export const makePostRequest = ({ API_URL, queryParams, body }) => {
  return axios.post(BASE_API + API_URL, body, {
    params: queryParams,
  });
};

import axios from "axios";
import { BASE_URL, CYBERSOFT_TOKEN } from "../settings/apiConfig";

export const callApi = (
  endpoint,
  method = "GET",
  data = null,
  token = null
) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {
      TokenCybersoft: `${CYBERSOFT_TOKEN}`,
      Authorization: `Bearer ${token}`,
    },
  });
};

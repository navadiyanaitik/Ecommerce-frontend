import axios from "axios";
import config from "../config";
const domain = config.localUrl;
export const S3_URL = "https://fashionhub.s3.ap-south-1.amazonaws.com/test/";

const api = axios.create({
  baseURL: domain,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["authorization"] = `Bearer ${token}`;
  config.headers["Accept"] = "application/json";
  return config;
});

api.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    } else if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.clear();
          window.location.reload();
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  }
);

export { api };

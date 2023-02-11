import axios from "axios";

export const myaxios = axios.create({
  baseURL: "https://api.wishx.me",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export const myaxiosprivate = axios.create({
  baseURL: "https://api.wishx.me",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const token = JSON.parse(localStorage.getItem("token"));
if (token) {
  myaxiosprivate.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

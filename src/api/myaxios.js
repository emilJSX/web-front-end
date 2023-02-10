import axios from "axios";

export const myaxios = axios.create({
  baseURL: "https://api.wishx.me",
});
export const myaxiosprivate = axios.create({
  baseURL: "https://api.wishx.me",
});

myaxiosprivate.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"))[0];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

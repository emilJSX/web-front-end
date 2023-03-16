import axios from "axios";
export const myaxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});
export const myaxiosprivate = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

const errorHandler = (error) => {
  let message = "An error occurred, please try again later.";
  if (error.response) {
    const status = error.response.status;
    if (status === 401) {
      message = error.response.data.message;
    } else if (status === 403) {
      message = error.response.data.message;
    } else if (status === 404) {
      message = error.response.data.message;
    } else if (status === 409) {
      message = error.response.data.message;
    } else if (status === 422) {
      message = error.response.data.message;
    } else if (status >= 500) {
      message = "An error occurred on the server. Please try again later.";
    } else {
      message = "An error occurred with your request. Please try again later.";
    }
  } else if (error.request) {
    message =
      "Could not connect to the server. Please check your internet connection and try again.";
  } else if (error.message) {
    message = error.message;
  }

  throw new Error(message);
};

const addRequestInterceptor = (instance, token) => {
  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }),
    (error) => errorHandler(error);
};
const userToken = JSON.parse(localStorage.getItem("token"));
addRequestInterceptor(myaxiosprivate, userToken);
addRequestInterceptor(myaxios);

myaxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => errorHandler(error)
);
myaxiosprivate.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => errorHandler(error)
);

export const updateToken = (token) => {
  if (token) {
    myaxiosprivate.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete myaxiosprivate.defaults.headers.common["Authorization"];
  }
};
myaxiosprivate.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      updateToken(null);
    }
    return Promise.reject(error);
  }
);

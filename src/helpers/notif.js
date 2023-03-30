import Echo from "laravel-echo";
// import Pusher from "pusher-js";

const token = JSON.parse(localStorage.getItem("token"));

export const echo = new Echo({
  broadcaster: "pusher",
  key: process.env.REACT_APP_PUSHER_APP_KEY,
  cluster: "mt1",
  wsHost: process.env.REACT_APP_PUSHER_HOST,
  wsPort: process.env.REACT_APP_PUSHER_PORT ?? 80,
  wssPort: process.env.REACT_APP_PUSHER_PORT ?? 443,
  forceTLS: "http",
  authEndpoint: `${process.env.REACT_APP_API_URL}/broadcasting/auth`,
  auth: {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
  enabledTransports: ["ws", "wss"],
});

import axios from "axios";
const baseURL = (process.env.NEXT_PUBLIC_API_URL || "") + "/api";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

if (process.env.NODE_ENV === "development") {
  console.log("Axios initialized with baseURL:", baseURL);
}

import axios from "axios";

const authClient = axios.create({
  baseURL: "http://10.0.2.2:8080", // emulador Android
  // baseURL: "http://localhost:8080", // web
});

export default authClient;
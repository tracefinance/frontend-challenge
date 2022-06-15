import axios from "axios";

const api = axios.create({
  baseURL: "https://629f52338b939d3dc29519e3.mockapi.io/api/challenge"
})

export default api;
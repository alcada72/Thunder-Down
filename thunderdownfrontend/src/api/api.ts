import axios from "axios"
import baseURL from "./baseUrl"

const api = axios.create({
  baseURL: baseURL,

})

api.interceptors.request.use((config) => {

  config.headers["Content-Type"] = "application/json"
  return config
})

export default api
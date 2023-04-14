import axios from "axios"

//apply base url for axios

const API_URL_DEV = "http://localhost:4000/api/v1"
const API_URL_PRD = "http://api.artograph.edisonvalley.com"

export const axiosApi = axios.create({
  baseURL: API_URL_DEV,
})

axiosApi.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token")

    if (token) {
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("token")
    }
    return config
  },
  function (error) {
    return error
  }
)
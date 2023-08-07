import axios from "axios"


export const axiosInstance = axios.create({
    baseURL : "https://localize-534020189f78.herokuapp.com/api/",
})
import axios from "axios";

export const api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/",
    timeout: 8000
})
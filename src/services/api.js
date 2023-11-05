import axios from "axios";

export const api = axios.create({
    baseURL: "https://cdn.moeda.info/api/bcb.json",
    timeout: 8000
})
import axios from "axios";

export const apiClientLocal = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
});
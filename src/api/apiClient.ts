import axios from "axios";

const BASE_URL = "https://pfvrkfaiyeaykfuybqlz.supabase.co/rest/v1";

export const apiClientLocal = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
});

export const apiClientRemote = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})
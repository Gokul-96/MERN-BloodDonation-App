import axios from "axios"

const BASE_URL = "https://mern-blooddonationclone-app.onrender.com"


export const publicRequest = axios.create({
    baseURL: BASE_URL
})


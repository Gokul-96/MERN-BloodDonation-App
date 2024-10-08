import axios from 'axios';

const BASE_URL = "https://mern-blooddonationclone-app.onrender.com";

const token = localStorage.getItem('authToken'); // Or wherever you're storing your token

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` }
});
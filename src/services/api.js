import axios from "axios";

const api = axios.create({
 baseURL: "https://shopifybackend-wyow.onrender.com/"
});

export default api;

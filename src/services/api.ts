import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

//Conexão com a API
const api = axios.create({
    baseURL,
});

export default api;

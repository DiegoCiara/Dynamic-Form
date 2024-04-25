import axios from "axios";

const port = import.meta.env.PORT

export const serviceApi = axios.create({
  baseURL: `http://localhost:3333/`,
}); 

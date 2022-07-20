import axios from "axios";

const API = axios.create({
	baseURL: "https://api.datos.gob.mx/v1/condiciones-atmosfericas",
});

export default API;

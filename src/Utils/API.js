import axios from 'axios';

const endpoint = 'http://localhost:4000/listings';

export const axiosInstance = axios.create({
	baseURL: endpoint,
});

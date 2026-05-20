import axios from "axios";

const API = "http://localhost:4000"; // عدّلها

export const authService = {
    login: async (data: { email: string; password: string }) => {
        const res = await axios.post(`${API}/auth/login`, data);
        return res.data;
    },
};
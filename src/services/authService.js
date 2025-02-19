// src/services/authService.js
import axios from "axios";
import { AUTH_URL as API_URL } from "../../config/serverConfig";
import { toast } from "react-toastify";

export const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            password,
        });
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        toast.error("Username already exists");
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        toast.error("Invalid username or password");
    }
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user : null;
};

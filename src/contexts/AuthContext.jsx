// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    getCurrentUser,
    login,
    logout,
    register,
} from "../services/authService";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getCurrentUser());

    useEffect(() => {
        const currentUser = getCurrentUser();
        setUser(currentUser);
        if (currentUser) {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${currentUser.token}`;
        }
    }, []);

    const handleRegister = async (username, password) => {
        const data = await register(username, password);
        setUser(data.user);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    };

    const handleLogin = async (username, password) => {
        const data = await login(username, password);
        setUser(data.user);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
    };

    return (
        <AuthContext.Provider
            value={{ user, handleRegister, handleLogin, handleLogout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { AuthContext };

// src/components/Navbar.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const { user, handleLogout } = useAuth();
    const location = useLocation();

    return (
        <nav className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center space-x-4">
                    <Link
                        to="/"
                        className="text-2xl font-bold hover:text-gray-300"
                    >
                        Flashcard App
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-3 py-1 rounded focus:outline-none hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {location.pathname !== "/login" && (
                                <Link
                                    to="/login"
                                    className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none hover:bg-blue-600 transition"
                                >
                                    Login
                                </Link>
                            )}
                            {location.pathname !== "/register" && (
                                <Link
                                    to="/register"
                                    className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none hover:bg-blue-600 transition"
                                >
                                    Register
                                </Link>
                            )}
                        </>
                    )}
                    <button
                        onClick={toggleDarkMode}
                        className="bg-blue-500 text-white px-3 py-1 justify-self-end rounded focus:outline-none hover:bg-blue-600 transition cursor-pointer"
                    >
                        <i
                            className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
                        ></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;

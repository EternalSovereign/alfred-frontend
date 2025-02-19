// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import FlashcardList from "./components/FlashcardList";
import Login from "./components/Login";
import Register from "./components/Register";
import AddFlashcardModal from "./components/AddFlashcardModal";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import {
    getFlashcards,
    updateFlashcard,
    deleteFlashcard,
} from "./services/flashcardService";
import PropTypes from "prop-types";

const App = () => {
    const [darkMode, setDarkMode] = useState(false); // Define darkMode state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`h-screen flex flex-col ${
                darkMode ? "bg-gray-500 text-white" : "bg-white text-black"
            }`}
        >
            <AuthProvider>
                <Router>
                    <Navbar
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/home"
                            element={
                                <PrivateRoute>
                                    <FlashcardApp
                                        darkMode={darkMode}
                                        toggleDarkMode={toggleDarkMode}
                                    />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                    <ToastContainer />
                </Router>
            </AuthProvider>
        </div>
    );
};

const PrivateRoute = ({ children }) => {
    PrivateRoute.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

const FlashcardApp = ({ darkMode }) => {
    FlashcardApp.propTypes = {
        darkMode: PropTypes.bool.isRequired,
    };
    const [flashcards, setFlashcards] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, handleLogout } = useAuth();

    const fetchFlashcards = async () => {
        const data = await getFlashcards();
        setFlashcards(data);
    };
    useEffect(() => {
        setTimeout(() => {
            if (user) {
                console.log("Fetching flashcards...");
                fetchFlashcards();
            }
        }, 100);
    }, [user]);

    const showAnswer = (card) => {
        setFlashcards((prev) =>
            prev.map((c) =>
                c._id === card._id ? { ...c, showAnswer: true } : c
            )
        );
    };

    const handleAnswer = async (id, correct) => {
        const data = await updateFlashcard(id, { correct });
        if (correct) {
            toast.success("Correct! Keep up the good work.");
        } else {
            toast.error("Incorrect! Please try Again.");
        }
        setFlashcards((prev) =>
            prev.map((card) =>
                card._id === id ? { ...data, showAnswer: false } : card
            )
        );
        fetchFlashcards();
    };

    const handleAddFlashcard = async () => {
        setIsModalOpen(false);
        toast.success("Flashcard added successfully");
        fetchFlashcards();
    };

    const handleDelete = async (id) => {
        await deleteFlashcard(id);
        toast.success("Flashcard deleted successfully");
        fetchFlashcards();
    };

    return (
        <div
            className={`container mx-auto mt-5 p-5 ${
                darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
        >
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Flashcard Learning App</h1>
                <div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Add Flashcard
                    </button>
                </div>
            </div>
            <AddFlashcardModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onFlashcardAdded={handleAddFlashcard}
            />
            {flashcards.length > 0 ? (
                <FlashcardList
                    flashcards={flashcards}
                    showAnswer={showAnswer}
                    handleAnswer={handleAnswer}
                    handleDelete={handleDelete}
                    darkMode={darkMode}
                />
            ) : (
                <h3>No flashcards due for review today.</h3>
            )}
        </div>
    );
};

export default App;

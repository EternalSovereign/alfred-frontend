// src/components/Flashcard.js
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Flashcard = ({
    card,
    showAnswer,
    handleAnswer,
    handleDelete,
    darkMode,
}) => {
    return (
        <motion.div
            className={`card mb-3 p-4 rounded shadow-md ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center">
                <h5 className="font-semibold mb-2">{card.question}</h5>
                <button
                    onClick={() => handleDelete(card._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2 justify-self-end"
                >
                    <i className="fas fa-trash"></i> {/* Delete icon */}
                </button>
            </div>
            <div>
                <button
                    onClick={() => showAnswer(card)}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                    Show Answer
                </button>

                {card.showAnswer && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="mt-3">{card.answer}</p>
                        <button
                            onClick={() => handleAnswer(card._id, true)}
                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                        >
                            Got it right
                        </button>
                        <button
                            onClick={() => handleAnswer(card._id, false)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Got it wrong
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};
Flashcard.propTypes = {
    card: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
        showAnswer: PropTypes.bool.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
    showAnswer: PropTypes.func.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
};

export default Flashcard;

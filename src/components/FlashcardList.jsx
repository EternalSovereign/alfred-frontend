// src/components/FlashcardList.js
import React from "react";
import PropTypes from "prop-types";
import Flashcard from "./Flashcard";

const FlashcardList = ({
    flashcards,
    showAnswer,
    handleAnswer,
    handleDelete,
    darkMode,
}) => {
    return (
        <>
            <h3 className="mb-3">
                You have {flashcards.length} flashcards due today
            </h3>
            {flashcards.map((card) => (
                <Flashcard
                    key={card._id}
                    card={card}
                    showAnswer={showAnswer}
                    handleAnswer={handleAnswer}
                    handleDelete={handleDelete}
                    darkMode={darkMode}
                />
            ))}
        </>
    );
};
FlashcardList.propTypes = {
    flashcards: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
            showAnswer: PropTypes.bool.isRequired,
            user: PropTypes.string.isRequired,
            // add other card properties here if needed
        })
    ).isRequired,
    showAnswer: PropTypes.bool.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
};
export default FlashcardList;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Flashcard from "./Flashcard";

const FlashcardList = ({
    flashcards,
    showAnswer,
    handleAnswer,
    handleDelete,
    darkMode,
}) => {
    const [filteredFlashcards, setFilteredFlashcards] = useState([]);

    useEffect(() => {
        const filterFlashcards = () => {
            const now = new Date();
            const dueFlashcards = flashcards.filter((card) => {
                const reviewTime = new Date(card.nextReview);
                return reviewTime <= now;
            });
            setFilteredFlashcards(dueFlashcards);
        };

        filterFlashcards();
        const intervalId = setInterval(filterFlashcards, 10000);
        return () => clearInterval(intervalId);
    }, [flashcards]);

    return (
        <>
            <h3 className="mb-3">
                You have {filteredFlashcards.length} flashcards due today
            </h3>
            {filteredFlashcards.map((card) => (
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
            nextReview: PropTypes.instanceOf(Date).isRequired,
            // add other card properties here if needed
        })
    ).isRequired,
    showAnswer: PropTypes.func.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
};

export default FlashcardList;

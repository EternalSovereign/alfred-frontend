// src/services/flashcardService.js
import axios from "axios";
import { API_URL } from "../../config/serverConfig";

export const getFlashcards = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addFlashcard = async (flashcard) => {
    try {
        const response = await axios.post(API_URL, flashcard);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateFlashcard = async (id, updateData) => {
    const response = await axios.put(`${API_URL}/${id}`, updateData);
    return response.data;
};

export const deleteFlashcard = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

import axios from "axios";

const API_URL = "https://backend-note1-784510099957.us-central1.run.app"; // Backend URL
// const API_URL = "http://localhost:8080"; // Backend URL

export const getNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response.data;
};

export const createNote = async (noteData) => {
  const response = await axios.post(`${API_URL}/create`, noteData);
  return response.data;
};

export const updateNote = async (id, noteData) => {
  const response = await axios.put(`${API_URL}/update/${id}`, noteData);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};

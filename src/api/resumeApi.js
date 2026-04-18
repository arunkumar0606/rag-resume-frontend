import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const askResume = async (question) => {
  const response = await axios.post(`${API_URL}/ask_resume`, { question });
  return response.data.answer;
};

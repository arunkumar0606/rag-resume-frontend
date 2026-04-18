import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const askResume = async (question) => {
  const response = await axios.post(`${API_URL}/ask_resume`, { question });
  return response.data.answer;
};

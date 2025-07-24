// src/services/quizAPI.ts
import axios from "axios";

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  subject: string;
  semester: string;
  duration: number;
  totalMarks: number;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchQuizzes = async (): Promise<Quiz[]> => {
  const response = await axios.get("http://localhost:5000/api/quizzes");
  return response.data;
};

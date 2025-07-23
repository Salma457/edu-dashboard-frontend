import axios from "axios";

export const fetchQuizzes = async () => {
  const res = await axios.get("http://localhost:5000/api/quizzes");
  return res.data;
};
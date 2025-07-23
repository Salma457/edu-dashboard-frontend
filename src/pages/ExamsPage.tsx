// src/pages/ExamsPage.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import QuizCard from "../components/common/QuizCard";
import axios from "axios";

type Quiz = {
  _id: string;
  title: string;
  description: string;
  subject: string;
  semester: string;
  duration: number;
  totalMarks: number;
  authorName: string;
  authorAvatar: string;
};

const ExamsPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quizzes")
      .then((res) => {
        setQuizzes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch quizzes:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Quizzes
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : quizzes.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No quizzes available.
        </Typography>
      ) : (
        quizzes.map((quiz) => <QuizCard key={quiz._id} quiz={quiz} />)
      )}
    </Container>
  );
};

export default ExamsPage;

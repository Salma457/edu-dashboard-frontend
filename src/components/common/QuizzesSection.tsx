import React from "react";
import { useAppSelector } from "../../app/hooks";
import SectionTitle from "./SectionTitle";
import LoadingSpinner from "./LoadingSpinner";
import { Typography } from "@mui/material";
import QuizCard from "./QuizCard";

const QuizzesSection = () => {
  const { items: quizzes, status } = useAppSelector((state) => state.quizzes);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "failed")
    return <Typography color="error">Failed to fetch quizzes.</Typography>;

  return (
    <>
      <SectionTitle text="Quizzes" mt={5} />
      {quizzes.map((quiz: any) => (
        <QuizCard key={quiz._id} quiz={quiz} />
      ))}
    </>
  );
};

export default QuizzesSection;

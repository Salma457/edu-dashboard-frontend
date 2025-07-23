// src/components/QuizCard.tsx
import React from "react";
import { Card,  Typography, Avatar, Box, Chip } from "@mui/material";

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

interface Props {
  quiz: Quiz;
}

const QuizCard: React.FC<Props> = ({ quiz }) => {
  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar src={quiz.authorAvatar} alt={quiz.authorName} sx={{ mr: 2 }} />
        <Typography variant="subtitle1">{quiz.authorName}</Typography>
      </Box>
      <Typography variant="h6">{quiz.title}</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {quiz.description}
      </Typography>
      <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
        <Chip label={`Subject: ${quiz.subject}`} />
        <Chip label={`Semester: ${quiz.semester}`} />
        <Chip label={`Duration: ${quiz.duration} mins`} />
        <Chip label={`Total Marks: ${quiz.totalMarks}`} />
      </Box>
    </Card>
  );
};

export default QuizCard;

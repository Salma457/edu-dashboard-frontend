import React from "react";
import { Card, Typography, Avatar, Box, Chip } from "@mui/material";
import {
  cardStyles,
  authorContainerStyles,
  avatarStyles,
  titleStyles,
  descriptionStyles,
  chipsContainerStyles,
  chipStyles
} from "../styles/common/QuizCard.styles";

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
    <Card sx={cardStyles}>
      <Box sx={authorContainerStyles}>
        <Avatar 
          src={quiz.authorAvatar} 
          alt={quiz.authorName} 
          sx={avatarStyles} 
        />
        <Typography variant="subtitle1">{quiz.authorName}</Typography>
      </Box>
      
      <Typography variant="h6" sx={titleStyles}>
        {quiz.title}
      </Typography>
      
      <Typography variant="body2" sx={descriptionStyles}>
        {quiz.description}
      </Typography>
      
      <Box sx={chipsContainerStyles}>
        <Chip label={`Subject: ${quiz.subject}`} sx={chipStyles} />
        <Chip label={`Semester: ${quiz.semester}`} sx={chipStyles} />
        <Chip label={`Duration: ${quiz.duration} mins`} sx={chipStyles} />
        <Chip label={`Total Marks: ${quiz.totalMarks}`} sx={chipStyles} />
      </Box>
    </Card>
  );
};

export default QuizCard;
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerStyles,
  textContainerStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
  imageContainerStyles,
  imageStyles
} from "../styles/common/ExamTipsHeader.styles";
import {
  containerAnimation,
  imageAnimation,
  buttonAnimation
} from "../styles/common/ExamTipsHeader.animations";

const ExamTipsHeader = () => {
  const navigate = useNavigate();

  return (
    <motion.div {...containerAnimation}>
      <Box sx={containerStyles}>
        <Box sx={textContainerStyles}>
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            gutterBottom
            sx={titleStyles}
          >
            Master Your Exams
          </Typography>
          <Typography 
            variant="body1" 
            sx={subtitleStyles}
          >
            Proven strategies to ace your upcoming assessments with confidence.
          </Typography>
          <motion.div {...buttonAnimation}>
            <Button
              variant="contained"
              sx={buttonStyles}
              onClick={() => navigate("/exams")}
            >
              Explore Tips
            </Button>
          </motion.div>
        </Box>

        <Box sx={imageContainerStyles}>
          <motion.img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Exam Preparation"
            style={imageStyles}
            {...imageAnimation}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ExamTipsHeader;
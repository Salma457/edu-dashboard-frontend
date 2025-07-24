import React from "react";
import { Box, Button, Typography, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Animation keyframes
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ExamTipsHeader = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 3,
          boxShadow: '0 4px 20px rgba(0, 150, 199, 0.15)',
          border: '1px solid rgba(0, 150, 199, 0.1)',
          height: { xs: 'auto', md: '220px' } // Reduced height
        }}
      >
        <Box flex={1} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              color: '#144272',
              lineHeight: 1.3
            }}
          >
            Master Your Exams
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2, 
              color: "text.secondary",
              fontSize: '0.95rem'
            }}
          >
            Proven strategies to ace your upcoming assessments with confidence.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: '#0096c7',
                textTransform: "none",
                px: 3,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': { 
                  bgcolor: '#0077a8',
                  animation: `${pulse} 2s infinite`
                },
              }}
              onClick={() => navigate("/exams")}
            >
              Explore Tips
            </Button>
          </motion.div>
        </Box>

        <Box
          flex={1}
          sx={{
            position: 'relative',
            height: '100%',
            minHeight: { xs: 180, md: 'auto' }
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Professional exam prep image
            alt="Exam Preparation"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              maxHeight: 180
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ExamTipsHeader;
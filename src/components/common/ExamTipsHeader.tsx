import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExamTipsHeader = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#f5f7fb",
        borderRadius: 3,
        p: 4,
        mt: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box flex={1}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Exam Time is Here!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555" }}>
          Stay calm and prepare wisely. Check out our top exam tips to perform your best in the upcoming assessments.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#1976d2",
            textTransform: "none",
            px: 3,
            py: 1,
            "&:hover": { bgcolor: "#1565c0" },
          }}
          onClick={() => navigate("/exams")}
        >
          View Exam Tips
        </Button>
      </Box>

      <Box
        flex={1}
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/4359/4359873.png"
        alt="Exam Time"
        sx={{
          width: "100%",
          maxWidth: 300,
          mx: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

export default ExamTipsHeader;

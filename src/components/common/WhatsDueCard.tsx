import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Divider,
  Card,
  CardContent
} from "@mui/material";
import {
  cardStyles,
  cardContentStyles,
  headerStyles,
  titleStyles,
  dueItemStyles,
  dividerStyles,
  quizButtonStyles,
  assignmentButtonStyles
} from "../styles/common/WhatsDueCard.styles";

const WhatsDueCard = () => {
  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <Box sx={headerStyles}>
          <Typography variant="h6" sx={titleStyles}>
            What's due
          </Typography>
          <Typography variant="body2" color="primary">
            All
          </Typography>
        </Box>
        
        {/* Due Item 1 */}
        <Box sx={dueItemStyles}>
          <Typography variant="subtitle2" sx={titleStyles}>
            Unit 2 quiz
          </Typography>
          <Typography variant="body2" color="text.secondary">
            College: Physics 02
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Topic:
          </Typography>
          <Typography variant="body2">
            • Unit: Motion and forces
          </Typography>
          <Typography variant="body2">
            • Due to: 30 Dec 2023 - 09:00 PM
          </Typography>
          <Button 
            variant="outlined" 
            size="small" 
            sx={quizButtonStyles}
          >
            Start Quiz
          </Button>
        </Box>
        
        <Divider sx={dividerStyles} />
        
        {/* Due Item 2 */}
        <Box>
          <Typography variant="subtitle2" sx={titleStyles}>
            12-12 Assignment
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Course: August 12
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Topic:
          </Typography>
          <Typography variant="body2">
            • April 1 - April 1way
          </Typography>
          <Typography variant="body2">
            • Due to: 30 Dec 2023 - 09:00 PM
          </Typography>
          <Button 
            variant="contained" 
            size="small" 
            sx={assignmentButtonStyles}
          >
            Solve Assignment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WhatsDueCard;
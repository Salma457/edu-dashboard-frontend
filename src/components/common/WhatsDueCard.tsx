import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Divider,
  Card,
  CardContent
} from "@mui/material";

const WhatsDueCard = () => {
  return (
    <Card sx={{ 
      borderRadius: '12px',
      boxShadow: 2,
      height: '100%'
    }}>
      <CardContent sx={{ p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            What's due
          </Typography>
          <Typography variant="body2" color="primary">
            All
          </Typography>
        </Box>
        
        {/* Due Item 1 */}
        <Box mb={2}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
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
            sx={{ 
              mt: 1,
              textTransform: 'none',
              borderColor: '#0096c7',
              color: '#0096c7'
            }}
          >
            Start Quiz
          </Button>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Due Item 2 */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
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
            sx={{ 
              mt: 1,
              textTransform: 'none',
              backgroundColor: '#0096c7',
              '&:hover': { backgroundColor: '#007ba3' }
            }}
          >
            Solve Assignment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WhatsDueCard;
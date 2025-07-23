// src/components/dashboard/WhatsDueCard.tsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Schedule } from "@mui/icons-material";

const dueItems = [
  { title: "React Quiz", due: "Due Tomorrow" },
  { title: "JavaScript Exam", due: "Due in 3 Days" },
  { title: "CSS Practice", due: "Due in 5 Days" },
];

const WhatsDueCard: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3, bgcolor: "#fff", minWidth: 300 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Schedule sx={{ mr: 1, color: "#3f51b5" }} />
        <Typography variant="h6">What's Due</Typography>
      </Box>
      <List>
        {dueItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={item.title}
              secondary={item.due}
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default WhatsDueCard;

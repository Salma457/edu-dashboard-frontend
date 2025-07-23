// src/components/layout/Navbar.tsx
import React from "react";
import { AppBar,  Toolbar, Typography, Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "#ffffff", color: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Anyware Portal
        </Typography>
        <Avatar src="/user-avatar.png" alt="User" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

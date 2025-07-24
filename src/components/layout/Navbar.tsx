import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, IconButton } from "@mui/material";
import { Notifications, Search, Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.97)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  color: "#333",
  borderBottom: "1px solid rgba(0, 150, 199, 0.1)",
  height: 64
}));

const Navbar = () => {
  return (
    <StyledAppBar position="static" elevation={0}>
      <Toolbar sx={{ 
        justifyContent: "space-between",
        minHeight: '64px !important'
      }}>
        <Box display="flex" alignItems="center">
          <IconButton sx={{ mr: 2, display: { md: 'none' } }}>
            <Menu sx={{ color: "#0096c7" }} />
          </IconButton>
          <Typography variant="h6" fontWeight="800" sx={{ color: "#0096c7" }}>
            COLIGO
          </Typography>
        </Box>
        
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <Search sx={{ color: "#0096c7" }} />
          </IconButton>
          <IconButton>
            <Notifications sx={{ color: "#0096c7" }} />
          </IconButton>
          <Avatar 
            src="/user-avatar.png" 
            alt="User"
            sx={{
              width: 36,
              height: 36,
              border: "2px solid #0096c7"
            }}
          />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
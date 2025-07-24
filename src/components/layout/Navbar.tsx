import React from "react";
import { 
  Toolbar,  
  Avatar, 
  Box, 
  IconButton,
  InputAdornment
} from "@mui/material";
import { 
  Notifications, 
  Menu, 
  Search,
  Mail
} from "@mui/icons-material";
import {
  StyledAppBar,
  SearchField,
  toolbarStyles,
  menuButtonStyles,
  avatarStyles,
  iconColor
} from "../styles/layout/Navbar.styles";

const Navbar = () => {
  return (
    <StyledAppBar position="static" elevation={0}>
      <Toolbar sx={toolbarStyles}>
        <Box display="flex" alignItems="center">
          <IconButton sx={menuButtonStyles}>
            <Menu sx={{ color: iconColor }} />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <SearchField
            placeholder="Search..."
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: iconColor }} />
                </InputAdornment>
              ),
            }}
          />

          <IconButton>
            <Notifications sx={{ color: iconColor }} />
          </IconButton>

          <IconButton>
            <Mail sx={{ color: iconColor }} />
          </IconButton>

          <Avatar
            src="https://i.pravatar.cc/100?img=2"
            alt="User"
            sx={avatarStyles}
          />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
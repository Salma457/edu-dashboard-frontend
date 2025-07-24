import React from "react";
import { 
  AppBar, 
  Toolbar,  
  Avatar, 
  Box, 
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";
import { 
  Notifications, 
  Menu, 
  Search,
  Mail
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.97)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  color: "#333",
  borderBottom: "1px solid rgba(0, 150, 199, 0.1)",
  height: 64
}));

const SearchField = styled(TextField)(({ theme }) => ({
  width: 220,
  marginLeft: theme.spacing(2), 
  '& .MuiOutlinedInput-root': {
    borderRadius: 20,
    backgroundColor: 'rgba(0, 150, 199, 0.05)',
    '& fieldset': {
      borderColor: 'rgba(0, 150, 199, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 150, 199, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0096c7',
    },
  },
}));

const Navbar = () => {
  return (
    <StyledAppBar position="static" elevation={0}>
    <Toolbar
  sx={{
    justifyContent: "space-between",
    minHeight: "64px !important",
    
  }}
>
  <Box display="flex" alignItems="center">
    <IconButton sx={{ ml: 2, display: { md: "none" } }}>
      <Menu sx={{ color: "#0096c7" }} />
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
            <Search sx={{ color: "#0096c7" }} />
          </InputAdornment>
        ),
      }}
    />

    <IconButton>
      <Notifications sx={{ color: "#0096c7" }} />
    </IconButton>

    <IconButton>
      <Mail sx={{ color: "#0096c7" }} />
    </IconButton>

    <Avatar
      src="https://i.pravatar.cc/100?img=2"
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
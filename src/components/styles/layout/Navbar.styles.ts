import { styled } from "@mui/material/styles";
import { AppBar, TextField } from "@mui/material";
import { SxProps } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.97)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  color: "#333",
  borderBottom: "1px solid rgba(0, 150, 199, 0.1)",
  height: 64
}));

export const SearchField = styled(TextField)(({ theme }) => ({
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

export const toolbarStyles: SxProps = {
  justifyContent: "space-between",
  minHeight: "64px !important"
};

export const menuButtonStyles: SxProps = {
  ml: 2, 
  display: { md: "none" }
};

export const avatarStyles: SxProps = {
  width: 36,
  height: 36,
  border: "2px solid #0096c7"
};

export const iconColor = "#0096c7";
import { SxProps } from "@mui/material";

export const cardStyles: SxProps = {
  width: '100%',
  mb: 3,
  p: 3,
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'flex-start'
};

export const avatarStyles: SxProps = {
  width: 64, 
  height: 64,
  mr: 3,
  border: "2px solid #0096c7"
};

export const authorInfoStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  mr: 3
};

export const contentStyles: SxProps = {
  flex: 1
};

export const contentTextStyles: SxProps = {
  whiteSpace: 'pre-line'
};
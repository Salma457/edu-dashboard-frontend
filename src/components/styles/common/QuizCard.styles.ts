import { SxProps } from "@mui/material";

export const cardStyles: SxProps = {
  mb: 3,
  p: 2,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }
};

export const authorContainerStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  mb: 2
};

export const avatarStyles: SxProps = {
  mr: 2
};

export const titleStyles: SxProps = {
  fontWeight: 600,
  mb: 1
};

export const descriptionStyles: SxProps = {
  color: "text.secondary",
  mb: 2
};

export const chipsContainerStyles: SxProps = {
  mt: 1,
  display: "flex",
  flexWrap: "wrap",
  gap: 1
};

export const chipStyles: SxProps = {
  '& .MuiChip-label': {
    fontSize: '0.75rem'
  }
};
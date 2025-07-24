import { keyframes } from "@mui/material";
import { MotionStyle } from "framer-motion";

// Animation keyframes
export const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const containerStyles = {
  bgcolor: "background.paper",
  borderRadius: 3,
  p: 3,
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  gap: 3,
  boxShadow: '0 4px 20px rgba(0, 150, 199, 0.15)',
  border: '1px solid rgba(0, 150, 199, 0.1)',
  height: { xs: 'auto', md: '220px' }
};

export const textContainerStyles = {
  flex: 1,
  textAlign: { xs: 'center', md: 'left' }
};

export const titleStyles = { 
  color: '#144272',
  lineHeight: 1.3
};

export const subtitleStyles = { 
  mb: 2, 
  color: "text.secondary",
  fontSize: '0.95rem'
};

export const buttonStyles = {
  bgcolor: '#0096c7',
  textTransform: "none",
  px: 3,
  py: 1,
  borderRadius: 2,
  fontWeight: 600,
  '&:hover': { 
    bgcolor: '#0077a8',
    animation: `${pulseAnimation} 2s infinite`
  }
};

export const imageContainerStyles = {
  position: 'relative',
  height: '100%',
  minHeight: { xs: 180, md: 'auto' }
};

export const imageStyles: MotionStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain" as const, // Explicitly type as const
  maxHeight: 180
};
import React from "react";
import { Typography } from "@mui/material";
import { titleStyles } from "../styles/common/SectionTitle.styles";

interface SectionTitleProps {
  text: string;
  mt?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, mt = 3 }) => (
  <Typography 
    variant="h4" 
    gutterBottom 
    sx={titleStyles(mt)}
  >
    {text}
  </Typography>
);

export default SectionTitle;
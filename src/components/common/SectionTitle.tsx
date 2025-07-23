import React from "react";
import { Typography } from "@mui/material";

interface SectionTitleProps {
  text: string;
  mt?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, mt = 3 }) => (
  <Typography variant="h4" gutterBottom sx={{ mt, textAlign: "center" }}>
    {text}
  </Typography>
);

export default SectionTitle;

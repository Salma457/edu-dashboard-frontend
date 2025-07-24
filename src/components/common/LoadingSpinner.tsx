import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { spinnerContainerStyles } from "../styles/common/LoadingSpinner.styles";

const LoadingSpinner = () => (
  <Box sx={spinnerContainerStyles}>
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;
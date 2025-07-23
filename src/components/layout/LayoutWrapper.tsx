// src/components/layout/LayoutWrapper.tsx
import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <Navbar />
        <Box p={3}>{children}</Box>
      </Box>
    </Box>
  );
};

export default LayoutWrapper;

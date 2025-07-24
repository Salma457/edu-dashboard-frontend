import { SxProps } from "@mui/material";

export const dashboardContainerStyles: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: 4,
  mt: 2
};

export const leftSideStyles: SxProps = {
  flex: { xs: 1, md: 3 },
  width: "100%"
};

export const rightSideStyles: SxProps = {
  flex: { xs: 1, md: 1 },
  width: "100%"
};
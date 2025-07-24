import { SxProps } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

// Define specific TypographyProps with span component
type SpanTypographyProps = TypographyProps & { component?: 'span' };

export const sidebarContainerStyles: SxProps = {
  width: 280,
  height: '100vh',
  background: "linear-gradient(180deg, #0096c7 0%, #144272 100%)",
  display: "flex",
  flexDirection: "column",
  p: 3,
  overflowY: 'auto'
};

export const logoContainerStyles: SxProps = {
  color: "white",
  fontSize: "1.75rem",
  fontWeight: 700,
  textAlign: "left",
  py: 2,
  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
  display: 'flex',
  alignItems: 'center'
};

export const listContainerStyles: SxProps = {
  flex: 1, 
  p: 0
};

export const bottomListContainerStyles: SxProps = {
  p: 0
};

export const listItemButtonStyles = (selected: boolean): SxProps => ({
  borderRadius: "12px",
  px: 2,
  py: 1.25,
  backgroundColor: selected 
    ? "rgba(255, 255, 255, 0.35)"
    : "transparent",
  "&:hover": {
    backgroundColor: selected 
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(255,255,255,0.15)"
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.4)"
    }
  }
});

export const bottomListItemButtonStyles: SxProps = {
  borderRadius: "12px",
  px: 2,
  py: 1.25,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)"
  }
};

export const listItemIconStyles = (selected: boolean): SxProps => ({
  color: selected ? "white" : "rgba(255,255,255,0.8)"
});

export const bottomListItemIconStyles: SxProps = {
  color: "rgba(255,255,255,0.7)"
};

export const listItemTextStyles = (selected: boolean): SpanTypographyProps => ({
  fontSize: "0.95rem",
  fontWeight: selected ? 700 : 500,
  color: "white",
  letterSpacing: "0.5px",
  component: "span"
});

export const bottomListItemTextStyles: SpanTypographyProps = {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.8)",
  component: "span"
};
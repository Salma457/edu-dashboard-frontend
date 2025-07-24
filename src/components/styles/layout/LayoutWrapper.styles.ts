import { SxProps } from "@mui/material";

export const rootStyles: SxProps = {
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  backgroundColor: '#f5f7fb'
};

export const mainContentStyles: SxProps = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column'
};

export const navbarWrapperStyles: SxProps = {
  position: 'fixed',
  width: '100%',
  zIndex: 1100
};

export const scrollableContentStyles: SxProps = {
  flex: 1,
  pt: '64px', // Height of navbar
  overflowY: 'auto',
  height: 'calc(100vh - 64px)',
  display: 'flex'
};

export const contentStyles: SxProps = {
  flex: 1,
  p: 3,
  ml: { md: '280px' } // Space for sidebar
};

export const sidebarStyles: SxProps = {
  width: 280,
  position: 'fixed',
  left: 0,
  top: 64,
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
  zIndex: 1000,
  display: { xs: 'none', md: 'block' }
};
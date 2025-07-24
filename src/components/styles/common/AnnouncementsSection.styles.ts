import { SxProps } from "@mui/material";

export const cardStyles: SxProps = {
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: '#ffffff'
};

export const cardContentStyles: SxProps = {
  p: 3
};

export const headerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 3
};

export const showAllButtonStyles: SxProps = {
  textTransform: 'none',
  color: '#0096c7',
  borderColor: '#0096c7',
  '&:hover': {
    backgroundColor: 'rgba(0, 150, 199, 0.08)'
  }
};

export const loadingContainerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  py: 4
};

export const emptyStateStyles: SxProps = {
  variant: 'body1',
  color: 'textSecondary',
  textAlign: 'center',
  py: 4
};

export const errorStateStyles: SxProps = {
  color: 'error',
  textAlign: 'center',
  py: 2
};
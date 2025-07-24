import { SxProps } from "@mui/material";

export const cardStyles: SxProps = {
  borderRadius: '12px',
  boxShadow: 2,
  height: '100%'
};

export const cardContentStyles: SxProps = {
  p: 2
};

export const headerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2
};

export const titleStyles: SxProps = {
  fontWeight: 'bold'
};

export const dueItemStyles: SxProps = {
  mb: 2
};

export const dividerStyles: SxProps = {
  my: 2
};

export const quizButtonStyles: SxProps = {
  mt: 1,
  textTransform: 'none',
  borderColor: '#0096c7',
  color: '#0096c7'
};

export const assignmentButtonStyles: SxProps = {
  mt: 1,
  textTransform: 'none',
  backgroundColor: '#0096c7',
  '&:hover': { backgroundColor: '#007ba3' }
};
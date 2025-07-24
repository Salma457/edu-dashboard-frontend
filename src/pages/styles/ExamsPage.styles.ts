import { styled } from "@mui/material/styles";
import { Card, Avatar, Chip, Box, Pagination, Typography } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 20px -5px rgba(20, 66, 114, 0.15)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 28px rgba(0, 150, 199, 0.25)',
  },
  borderLeft: '4px solid #0096c7',
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: 'linear-gradient(90deg, #0096c7 0%, #144272 100%)'
  }
}));

export const StyledAvatar = styled(Avatar)({
  width: 52,
  height: 52,
  marginRight: 16,
  border: "3px solid #e6f7ff",
  boxShadow: '0 4px 12px rgba(0, 150, 199, 0.25)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)'
  }
});

export const SubjectChip = styled(Chip)({
  backgroundColor: '#144272',
  color: 'white',
  fontWeight: 600,
  fontSize: '0.75rem',
  height: 24,
  '&:hover': {
    backgroundColor: '#11315d',
    transform: 'translateY(-1px)'
  },
  transition: 'all 0.2s ease'
});

export const SemesterChip = styled(Chip)({
  backgroundColor: '#0096c7',
  color: 'white',
  fontWeight: 600,
  fontSize: '0.75rem',
  height: 24,
  '&:hover': {
    backgroundColor: '#007ba5',
    transform: 'translateY(-1px)'
  },
  transition: 'all 0.2s ease'
});

export const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: '#144272',
    fontWeight: 600,
    fontSize: '0.875rem',
    minWidth: 32,
    height: 32,
    borderRadius: 8,
    margin: '0 4px'
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    backgroundColor: '#0096c7',
    color: 'white',
    boxShadow: '0 2px 8px rgba(0, 150, 199, 0.3)'
  },
  '& .MuiPaginationItem-root:hover': {
    backgroundColor: 'rgba(0, 150, 199, 0.1)',
  },
  '& .MuiPaginationItem-ellipsis': {
    color: '#144272',
  }
});

export const HeaderBox = styled(Box)({
  mb: 4,
  p: 4,
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #0096c7 0%, #144272 100%)',
  color: 'white',
  boxShadow: '0 8px 24px rgba(0, 150, 199, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
    animation: 'shimmer 3s infinite linear',
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    }
  }
});

export const LoadingBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(4px)',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(0, 150, 199, 0.2)'
});

export const EmptyStateBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  textAlign: 'center',
  p: 4,
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(4px)',
  borderRadius: '16px',
  border: '2px dashed rgba(0, 150, 199, 0.4)',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#0096c7',
    transform: 'translateY(-2px)'
  }
});

export const QuizTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: 1.4,
  color: '#144272',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const QuizDescription = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '0.9375rem',
  lineHeight: 1.6,
  color: '#5a6a85'
});
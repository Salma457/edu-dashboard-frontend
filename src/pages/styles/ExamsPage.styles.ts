import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/material";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

// Styled Components
export const StyledCard = styled(Card)({
  boxShadow: '0 4px 20px -5px rgba(20, 66, 114, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0, 150, 199, 0.3)',
  },
  borderLeft: '4px solid #0096c7',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const StyledAvatar = styled(Avatar)({
  width: 48,
  height: 48,
  marginRight: 16,
  border: "2px solid #0096c7",
  boxShadow: '0 2px 8px rgba(0, 150, 199, 0.3)'
});

export const SubjectChip = styled(Chip)({
  backgroundColor: '#144272',
  color: 'white',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#11315d',
  }
});

export const SemesterChip = styled(Chip)({
  backgroundColor: '#0096c7',
  color: 'white',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#007ba5',
  }
});

// Main Container Styles
export const mainContainerStyles: SxProps = {
  width: { xs: '100%', md: 'calc(100% - 280px)' },
  ml: { xs: 0, md: '100px' },
  px: { xs: 2, sm: 3 },
  py: 4,
  minHeight: 'calc(100vh - 64px)',
};

// Header Styles
export const headerStyles: SxProps = {
  mb: 4,
  p: 3,
  borderRadius: 2,
  background: 'linear-gradient(135deg, #0096c7 0%, #144272 100%)',
  color: 'white',
  boxShadow: '0 4px 12px rgba(0, 150, 199, 0.25)',
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
    animation: 'shimmer 3s infinite',
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    }
  }
};

export const headerTitleStyles: SxProps = {
  mb: 1,
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  position: 'relative'
};

export const headerSubtitleStyles: SxProps = {
  opacity: 0.9,
  maxWidth: '600px',
  position: 'relative'
};

// Loading State Styles
export const loadingContainerStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',
  background: 'white',
  borderRadius: 2,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
};

export const circularProgressStyles: SxProps = {
  color: '#0096c7'
};

export const loadingTextStyles: SxProps = {
  mt: 2,
  color: '#144272'
};

// Empty State Styles
export const emptyStateContainerStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  textAlign: 'center',
  p: 4,
  background: 'white',
  borderRadius: 2,
  border: '2px dashed',
  borderColor: '#0096c7',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
};

export const emptyStateTitleStyles: SxProps = {
  color: '#144272',
  mb: 1,
  fontWeight: 600
};

export const emptyStateTextStyles: SxProps = {
  color: '#5a6a85'
};

// Quiz Grid Styles
export const quizGridStyles: SxProps = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)'
  },
  gap: 3
};

// Quiz Card Content Styles
export const authorContainerStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  mb: 2
};

export const quizTitleStyles: SxProps = {
  color: '#144272',
  fontWeight: 'bold'
};

export const quizDescriptionStyles: SxProps = {
  whiteSpace: 'pre-line',
  mb: 2
};

export const quizDetailsContainerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  mb: 2
};

export const chipsContainerStyles: SxProps = {
  direction: 'row',
  spacing: 1,
  mt: 2
};

// Pagination Styles
export const paginationContainerStyles: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  mt: 4
};

export const paginationStyles: SxProps = {
  '& .MuiPaginationItem-root': {
    color: '#144272',
    fontWeight: 600,
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    backgroundColor: '#0096c7',
    color: 'white',
  },
  '& .MuiPaginationItem-root:hover': {
    backgroundColor: 'rgba(0, 150, 199, 0.1)',
  },
  '& .MuiPaginationItem-ellipsis': {
    color: '#144272',
  }
};
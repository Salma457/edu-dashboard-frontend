import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/material";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: `0 4px 20px -5px rgba(20, 66, 114, 0.2)`,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 6px 24px -3px rgba(0, 150, 199, 0.3)`,
  },
  borderLeft: `4px solid #0096c7`,
  borderRadius: '8px',
  overflow: 'hidden',
}));

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

export const TypeChip = styled(Chip)({
  backgroundColor: '#0096c7',
  color: 'white',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#007ba5',
  }
});

export const containerStyles: SxProps = {
  maxWidth: 'md',
  mx: 'auto',
  px: { xs: 2, sm: 3 },
  py: 4,
  minHeight: 'calc(100vh - 128px)'
};

export const titleStyles: SxProps = {
  fontWeight: 700,
  color: '#144272',
  mb: 4,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: '60px',
    height: '4px',
    backgroundColor: '#0096c7',
    borderRadius: '2px'
  }
};

export const contentStyles: SxProps = {
  whiteSpace: 'pre-line',
  lineHeight: 1.6,
  color: 'text.primary'
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
  }
};

export const loadingContainerStyles: SxProps = {
  maxWidth: 'md', 
  mx: 'auto', 
  px: 3, 
  py: 4
};

export const skeletonTitleStyles: SxProps = {
  mb: 3
};

export const skeletonCardStyles: SxProps = {
  mb: 3,
  borderRadius: 2
};
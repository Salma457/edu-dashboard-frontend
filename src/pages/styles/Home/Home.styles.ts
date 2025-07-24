import { styled } from "@mui/material/styles";
import { Paper, Card, Box, Typography, Button } from "@mui/material";

export const HeroSection = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0096c7 0%, #144272 100%)',
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius as number * 2,
  padding: theme.spacing(8, 2),
  marginBottom: theme.spacing(6),
  textAlign: 'center',
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
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderLeft: '4px solid #0096c7',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  }
}));

export const FeaturesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  justifyContent: 'center',
  '& > *': {
    flex: '1 1 300px',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '1 1 calc(33.333% - 32px)',
    }
  }
}));

export const TitleWithUnderline = styled(Typography)(({ theme }) => ({
  color: '#144272',
  fontWeight: 600,
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 4,
    backgroundColor: '#0096c7',
    borderRadius: 2
  }
}));

export const WhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: '#144272',
  fontWeight: 600,
  padding: theme.spacing(1.5, 4),
  '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
}));

export const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0096c7',
  color: theme.palette.common.white,
  fontWeight: 600,
  padding: theme.spacing(1.5, 4),
  '&:hover': { backgroundColor: '#0077a8' }
}));

export const CtaBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  backgroundColor: 'rgba(0, 150, 199, 0.05)',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  border: '1px solid rgba(0, 150, 199, 0.1)',
  textAlign: 'center'
}));
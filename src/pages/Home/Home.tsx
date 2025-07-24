// src/pages/Home/Home.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Paper,
  useTheme,
  styled
} from "@mui/material";
import { RootState } from "../../app/store";

const HeroSection = styled(Paper)(({ theme }) => ({
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

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderLeft: '4px solid #0096c7',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  }
}));

const FeaturesContainer = styled(Box)(({ theme }) => ({
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

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(
        login({
          token: 'dummy-token', 
          user: {
            id: '1',
            name: 'Salma Hussein',
            role: 'student',
          },
        })
      );
      navigate("/dashboard");
    }
  };

  const features = [
    {
      title: "Interactive Learning",
      description: "Engage with interactive quizzes and exams to test your knowledge."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics."
    },
    {
      title: "Expert Content",
      description: "Access high-quality educational materials from top instructors."
    }
  ];

  return (
    <Box sx={{ pt: 4, pb: 8 }}>
      <HeroSection elevation={4}>
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative'
            }}
          >
            Welcome to Anyware Challenge
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              position: 'relative'
            }}
          >
            Elevate your learning experience with our comprehensive educational platform
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleAuthClick}
            sx={{
              backgroundColor: theme.palette.common.white,
              color: '#144272',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
              position: 'relative'
            }}
          >
            {isAuthenticated ? "Go to Dashboard" : "Login"}
          </Button>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            color: '#144272',
            fontWeight: 600,
            mb: 6,
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
          }}
        >
          Our Features
        </Typography>

        <FeaturesContainer>
          {features.map((feature, index) => (
            <Box key={index}>
              <FeatureCard>
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      color: '#144272',
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Box>
          ))}
        </FeaturesContainer>

        <Box sx={{ 
          mt: 8,
          p: 4,
          backgroundColor: 'rgba(0, 150, 199, 0.05)',
borderRadius: Number(theme.shape.borderRadius) * 2,
          border: '1px solid rgba(0, 150, 199, 0.1)',
          textAlign: 'center'
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              color: '#144272',
              fontWeight: 600
            }}
          >
            Ready to get started?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Join thousands of students who are already improving their skills with our platform.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleAuthClick}
            sx={{
              backgroundColor: '#0096c7',
              color: theme.palette.common.white,
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#0077a8',
              }
            }}
          >
            {isAuthenticated ? "Go to Dashboard" : "Sign Up Now"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;




// // src/pages/Home/Home.tsx
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout } from "../../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";
// import { Button, Container, Typography } from "@mui/material";
// import { RootState } from "../../app/store";

// const Home = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   const handleAuthClick = () => {
//     if (isAuthenticated) {
//       dispatch(logout());
//     } else {
// dispatch(
//   login({
//     token: 'dummy-token', 
//     user: {
//       id: '1',
//       name: 'Salma Hussein',
//       role: 'student',
//     },
//   })
// );
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h3" gutterBottom>Welcome to Anyware Challenge</Typography>
//       <Button variant="contained" color="primary" onClick={handleAuthClick}>
//         {isAuthenticated ? "Logout" : "Login"}
//       </Button>
//     </Container>
//   );
// };

// export default Home;

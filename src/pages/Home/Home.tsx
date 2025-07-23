// src/pages/Home/Home.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { RootState } from "../../app/store";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to Anyware Challenge</Typography>
      <Button variant="contained" color="primary" onClick={handleAuthClick}>
        {isAuthenticated ? "Logout" : "Login"}
      </Button>
    </Container>
  );
};

export default Home;

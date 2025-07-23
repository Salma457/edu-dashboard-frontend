// pages/Home/Home.tsx
import { Button, Stack, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { login, logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
      navigate('/');
    } else {
dispatch(login({
  token: 'fakeToken123', // استخدمي توكن تجريبي أو حقيقي من الـ backend
  user: {
    id: '1',
    name: 'Salma',
    role: 'student',
  }
}));
      navigate('/dashboard');
    }
  };

  return (
    <Stack alignItems="center" spacing={2} mt={10}>
      <Typography variant="h4">Welcome to Anyware App</Typography>
      <Button variant="contained" onClick={handleClick}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </Button>
    </Stack>
  );
};

export default Home;

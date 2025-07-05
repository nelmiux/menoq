import { Box } from '@mui/material';

import { default as LoginComponent } from '@/components/Login';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundImage: "url('assets/components/shared/background-science.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <LoginComponent />
    </Box>
  );
};

export default Login;

import { useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, Card, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';

import { plum } from '@/utilities/colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    // Login logic would go here
    console.log('Login attempt with:', { email, password, keepLoggedIn });
  };

  return (
    <Card
      sx={{
        display: 'flex',
        width: { xl: '1053px', lg: '950px', md: '950px', sm: '100%', xs: '100%' },
        height: { lg: '606px', md: '606px', sm: '100%', xs: '100%' },
        margin: 'auto',
        overflowX: 'hidden',
        overflowY: 'visible',
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        sx={{ p: 0, height: '100%' }}
        rowGap={1}
      >
        {/* Top left corner with logo */}
        <Grid item xs={4} sx={{ justifyContent: 'start', pt: 4, pl: { md: 6, xs: 4 } }}>
          {/* Left side with image */}
          <Box component="img" src="assets/logo/logo-full-for-white-screen.svg" alt="menoQ logo" maxWidth={100}></Box>
        </Grid>
        <Grid item xs={8} sx={{ textAlign: 'end', pt: 2, pr: 8 }}>
          <Typography variant="body2" sx={{ display: 'inline', minWidth: '100%' }}>
            New User?&nbsp;&nbsp;
            <Link href="signup" underline="none" sx={{ color: plum[300], fontWeight: 500 }}>
              Sign Up
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          lg={5.5}
          alignSelf="end"
          height="528px"
          sx={{
            display: { lg: 'block', md: 'flex', sm: 'none', xs: 'none' },
            backgroundImage: 'url(assets/components/shared/menopause-professor-and-clock.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'start end',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Grid
          item
          container
          xs={12}
          md={6}
          lg={6.5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={5}
          pr={{ xs: 4, sm: 10, lg: 14 }}
          pl={{ xs: 4, sm: 10, md: 0, lg: 4 }}
          py={4}
        >
          {/* Welcome text */}
          <Grid item textAlign="start" xs={12}>
            <Typography variant="h4">Welcome Back!</Typography>
            <Typography variant="body2">Login to continue</Typography>
          </Grid>

          {/* Right side with login form */}
          <Grid item container direction="row" spacing={5} xs={12}>
            {/* Form fields */}
            <Grid item container direction="row" spacing={2} xs={12}>
              <Grid item container direction="row" spacing={1} xs={12}>
                <Grid item xs={12}>
                  <Typography variant="caption" color={plum[300]} fontWeight={600}>
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={1} xs={12}>
                <Grid item xs={12}>
                  <Typography variant="caption" color={plum[300]} fontWeight={600}>
                    Password
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      startAdornment: <LockIcon sx={{ mr: 1, color: 'action.active' }} />,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item container xs={12} justifyContent="space-between" alignItems="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={keepLoggedIn}
                      onChange={(e) => setKeepLoggedIn(e.target.checked)}
                      sx={{
                        color: plum[300],
                        '&.Mui-checked': {
                          color: plum[300],
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="caption"
                      sx={{
                        color: plum[300],
                        fontWeight: 600,
                      }}
                    >
                      Keep me logged in
                    </Typography>
                  }
                />
                <Link href="forgot-password" underline="none" variant="body3">
                  Forgot password
                </Link>
              </Grid>
              <Grid item xs={12}>
                {/* Login button */}
                <Button fullWidth variant="contained" onClick={handleLogin}>
                  Log in
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Login;

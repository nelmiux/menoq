import { Box, Typography } from '@mui/material';

import { ErrorProps } from '@/error/types';

import { errorCode, errorDescription, errorTitle, heroBanner, heroBannerLogo, root } from './styles';

const Error = (errorProps: ErrorProps) => {
  const { code, title, description } = errorProps;

  return (
    <>
      <Box sx={heroBanner}>
        <Box
          sx={heroBannerLogo}
          component="img"
          src="./assets/logo/logo-full-for-dark-screen.svg"
          maxWidth="200px"
        ></Box>
      </Box>
      <Box sx={root}>
        {code && <Typography sx={errorCode}>{code}</Typography>}
        <Typography sx={errorTitle}>{title}</Typography>
        <Typography sx={errorDescription}>{description}</Typography>
      </Box>
    </>
  );
};

export default Error;

import { Theme } from '@mui/material/styles';

import { plum } from '@/utilities/colors';

export const heroBanner = (theme: Theme) => ({
  backgroundColor: theme.palette.primary.dark,
});

export const heroBannerLogo = { marginLeft: '15%' };

export const root = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '70vh',
};

export const errorCode = (theme: Theme) => ({
  background: `-webkit-linear-gradient(270deg, ${theme.palette.primary.main} 9.8%, ${plum[100]} 99.53%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: 128,
  fontWeight: 400,
  letter: '10%',
  letterSpacing: 10,
  lineHeight: 1,
});

export const errorTitle = (theme: Theme) => ({
  textTransform: 'uppercase',
  color: theme.palette.grey[600],
  fontSize: 24,
  fontWeight: 750,
  letter: '5%',
  letterSpacing: 0.5,
});

export const errorDescription = (theme: Theme) => ({
  color: theme.palette.grey[600],
  fontSize: 20,
  fontWeight: 400,
  mt: 4,
  alignItems: 'center',
  textAlign: 'center',
  width: 460,
});

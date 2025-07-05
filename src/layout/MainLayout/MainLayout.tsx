import { Grid } from '@mui/material';

import { contentContainer, footerContainer } from './styles';
import { MainLayoutProps } from './types';

const MainLayout = ({ pageContent }: MainLayoutProps) => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        {/* <Header title={appName} logoPath={'./assets/logo/icon-128.png'} logoAltText={'Logo'} /> */}
      </Grid>
      <Grid container item xs={12} sx={contentContainer}>
        {pageContent}
      </Grid>
      <Grid container item xs={12} sx={footerContainer}>
        {/* <Footer feedbackFormUrl={feedbackLink} imgPath={logo} /> */}
      </Grid>
    </Grid>
  );
};

export default MainLayout;

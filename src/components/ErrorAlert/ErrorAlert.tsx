import { useDispatch, useSelector } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Alert, IconButton, Link, Snackbar } from '@mui/material';

import { RootState } from '@/store/store';
import { normalizeIcon } from '@/utilities/normalizeIcon';

import { alert, mainSnackbar } from './styles';

const ErrorAlert = () => {
  const dispatch = useDispatch();
  // The below errorMessage is coming from the API which we are not making use of as of now.
  const errorMessage = useSelector((state: RootState) => state.apiError.message);
  const CloseIconNormalized = normalizeIcon(CloseIcon);
  const ErrorOutlineIconNormalized = normalizeIcon(ErrorOutlineIcon);

  return (
    <Snackbar open={!!errorMessage} sx={mainSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        severity="error"
        icon={<ErrorOutlineIconNormalized style={{ color: 'white' }} />}
        sx={alert}
        action={
          <IconButton data-testid="closeButton" color="inherit" size="small" onClick={() => dispatch(error(''))}>
            <CloseIconNormalized fontSize="small" />
          </IconButton>
        }
      >
        Oops, something went wrong.{' '}
        {
          <Link href={location.href} color="inherit" fontSize="inherit" fontWeight="750">
            Click to reload
          </Link>
        }{' '}
        the page, or, contact the help desk at 800-722-2562.
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlert;

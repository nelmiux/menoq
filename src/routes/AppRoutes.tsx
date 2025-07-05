import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import routes from './routes';
import { mainBoxContainer } from './styles';

const AppRoutes = () => {
  return (
    <Box sx={mainBoxContainer}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              // <ProtectedRoute>
              <Component />
              // <ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </Box>
  );
};

export default AppRoutes;

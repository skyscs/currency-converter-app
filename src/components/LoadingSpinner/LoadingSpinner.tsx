import React from 'react';
import { Box, CircularProgress } from '@mui/material';

/**
 * Loading spinner component
 */
const LoadingSpinner: React.FC = () => {
  return (
    <Box
      data-testid="loading-spinner"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;

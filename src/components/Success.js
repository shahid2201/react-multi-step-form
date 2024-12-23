import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';

export const Success = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography sx={{ marginLeft: '1rem', marginTop: '5rem' }} variant="h4" gutterBottom>Success</Typography>
      <Typography sx={{ marginLeft: '1rem', marginTop: '1rem' }} variant="body1">Your submission was successful!</Typography>
      <Button variant="contained" sx={{ marginTop: '2rem' }} onClick={() => window.location.reload()} >
        Start Over
      </Button>
    </Box>
  );
};

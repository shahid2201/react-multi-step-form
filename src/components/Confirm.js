import React from 'react';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Typography, Stack, Button } from '@mui/material';

export const Confirm = ({ nextStep, previousStep, values }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', height: '100vh' }}>
      <Typography sx={{ marginLeft: '1rem', marginTop: '5rem' }} variant="h4" gutterBottom>Confirm Details: </Typography>
      <Stack spacing={2} direction="column" sx={{ marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem', width: '20rem' }}>
        <Typography variant="body1">Full Name: {values.fullName}</Typography>
        <Typography variant="body1">Email: {values.email}</Typography>
        <Typography variant="body1">User Name: {values.userName}</Typography>
        <Typography variant="body1">City: {values.city}</Typography>
        <Typography variant="body1">Province: {values.province}</Typography>
        <Typography variant="body1">Postal Code: {values.postalCode}</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button variant="outlined" startIcon={<NavigateBeforeIcon />} onClick={previousStep}>
            Back
          </Button>
          <Button variant="contained" endIcon={<NavigateNextIcon />} onClick={nextStep}>
            Confirm
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

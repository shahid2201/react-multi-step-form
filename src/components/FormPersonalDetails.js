import React from 'react';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Typography, Input, FormControl, InputLabel, Stack, Button } from '@mui/material';

export const FormPersonalDetails = ({ nextStep, previousStep, handleChange, values }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', height: '100vh' }}>
      <Typography sx={{ marginLeft: '1rem', marginTop: '5rem' }} variant="h4" gutterBottom>Personal Details: </Typography>
      <Stack spacing={2} direction="column" sx={{ marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem', width: '20rem' }}>
        <FormControl>
          <InputLabel htmlFor="city">City</InputLabel>
          <Input name="city" value={values.city} onChange={handleChange('city')} />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="province">Province</InputLabel>
          <Input name="province" value={values.province} onChange={handleChange('province')} />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="postalCode">Postal Code</InputLabel>
          <Input name="postalCode" value={values.postalCode} onChange={handleChange('postalCode')} />
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button variant="outlined" startIcon={<NavigateBeforeIcon />} onClick={previousStep}>
            Back
          </Button>
          <Button variant="contained" endIcon={<NavigateNextIcon />} onClick={nextStep}>
            Next
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

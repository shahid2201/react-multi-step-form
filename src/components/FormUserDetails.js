import React from 'react';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography, Input, FormControl, InputLabel, Stack, Button } from '@mui/material';

export const FormUserDetails = ({ nextStep, handleChange, values }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', height: '100vh' }}>
      <Typography sx={{ marginLeft: '1rem', marginTop: '5rem' }} variant="h4" gutterBottom>User Details: </Typography>
      <Stack spacing={2} direction="column" sx={{ marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem', width: '20rem' }}>
        <FormControl>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <Input name="fullName" value={values.fullName} onChange={handleChange('fullName')} />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input name="email" value={values.email} onChange={handleChange('email')} />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="userName">User Name</InputLabel>
          <Input name="userName" value={values.userName} onChange={handleChange('userName')} />
        </FormControl>

        <Button variant="contained" endIcon={<NavigateNextIcon />} onClick={nextStep}>
          Next
        </Button>
      </Stack>
    </Box>
  );
};

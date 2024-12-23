import React from 'react';
import { Button } from '@mui/material';

export const FormUserDetails = ( {nextStep, handleChange, values} ) => {
  return (
    <>
        <div>User Details</div>
        <form>
            Full Name: 
            <input name='fullName' value={values.fullName} onChange={handleChange('fullName')}></input>
            Email: 
            <input name='email' value={values.email} onChange={handleChange('email')}></input>
            User Name: 
            <input name='userName' value={values.userName} onChange={handleChange('userName')}></input>
            <Button variant='contained' endIcon={<ArrowBackIosIcon/>} onClick={nextStep}>Next</Button>
        </form>    
    </>
  )
}

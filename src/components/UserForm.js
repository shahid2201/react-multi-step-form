import React, { useState } from 'react'
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';
import { ErrorPage } from './ErrorPage';

export const UserForm = () => {
    const [step, setStep] = useState(1);
    const [formDetails, setFormDetails] = useState({
        fullName: '',
        email: '',
        userName: '',
        city: '',
        province: '',
        postalCode: ''
    });

    const nextStep = () => {
        setStep(step + 1);
    }

    const previousStep = () => {
        setStep(step - 1);
    }

    const handleChange = input => e => {
        setFormDetails({ ...formDetails, [input]: e.target.value });
    }

    switch(step) {
        case 1:
            return (
                <>
                <FormUserDetails 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formDetails}
                />
                <button onClick={() => setStep(999)}>Trigger Default Page</button>
                </>          
            );
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    previousStep={previousStep}
                    handleChange={handleChange}
                    values={formDetails}
                />
            );
        case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    previousStep={previousStep}
                    values={formDetails}
                />
            );
        case 4:
            return (
                <Success/>
            );
        default:
            return <ErrorPage/>;
    }
}

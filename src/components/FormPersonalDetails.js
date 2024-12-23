import React from 'react'

export const FormPersonalDetails = ( {nextStep, previousStep, handleChange, values} ) => {
  return (
    <>
        <div>Personal Details</div>
        <form>
            City: 
            <input name='city' value={values.city} onChange={handleChange('city')}></input>
            Province: 
            <input name='province' value={values.province} onChange={handleChange('province')}></input>
            Postal Code: 
            <input name='postalCode' value={values.postalCode} onChange={handleChange('postalCode')}></input>
            <button onClick={previousStep}>Back</button>    
            <button onClick={nextStep}>Next</button>    
        </form>    
    </>
  )
}

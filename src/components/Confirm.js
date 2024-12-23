import React from 'react'

export const Confirm = ( {nextStep, previousStep, values} ) => {
  return (
    <div>
        <div>Confirmation Page</div>
        <form>
            Full Name: 
            <input name='fullName' value={values.fullName} disabled></input>
            Email: 
            <input name='email' value={values.email} disabled></input>
            User Name: 
            <input name='userName' value={values.userName} disabled></input>
            City: 
            <input name='city' value={values.city} disabled></input>
            Province: 
            <input name='province' value={values.province} disabled></input>
            Postal Code: 
            <input name='postalCode' value={values.postalCode} disabled></input>
            <button onClick={previousStep}>Back</button>    
            <button onClick={nextStep}>Next</button>    
        </form>
    </div>
    
  )
}

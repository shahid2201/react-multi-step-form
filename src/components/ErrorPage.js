import React from 'react'

export const ErrorPage = () => {
  return (
    <div>
        Oops! An Error Occured.
        <button onClick={() => window.location.reload()}>Reload</button>
    </div>
    
  )
}

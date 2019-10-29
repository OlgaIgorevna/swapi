import React from 'react';
import './error-indicator.css';


const ErrorIndicator = (props)=>{
    return (

        <div className={"error-loading"}>
            <h2>BOOM!</h2>
            <div>Something has gone terribly wrong, <br/> (but we already sent droids to fix it) </div>
        </div>
    )
};

export default ErrorIndicator;
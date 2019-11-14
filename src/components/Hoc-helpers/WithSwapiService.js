import React from 'react';
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context"

const WithSwapiService = (WrappedComponent) =>{
    return (props) => {
        return <SwapiServiceConsumer>
            {
                (swapiService) => {
                    return <WrappedComponent {...props} swapiService={swapiService}/>
                }
            }
        </SwapiServiceConsumer>
    }
};
export default WithSwapiService;
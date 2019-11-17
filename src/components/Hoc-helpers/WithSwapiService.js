import React from 'react';
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context"

const WithSwapiService = (WrappedComponent, mapMethodsToProps) =>{
    return (props) => {
        return <SwapiServiceConsumer>
            {
                (swapiService) => {
                    const serviceProps = mapMethodsToProps(swapiService);
                    return <WrappedComponent {...props} {...serviceProps}/>
                }
            }
        </SwapiServiceConsumer>
    }
};
export default WithSwapiService;
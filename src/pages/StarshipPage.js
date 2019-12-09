import React from 'react';
import {StarshipList} from "../components/sw-components";
import {withRouter} from 'react-router-dom';
const StarshipPage = ({history})=> {
        return(
            <React.Fragment>
                <StarshipList onSelect={(itemId)=>{
                    history.push(itemId)
                }}/>
            </React.Fragment>
        )
    };
export default withRouter(StarshipPage);
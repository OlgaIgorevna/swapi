import React from 'react';
import Row from "../components/row/Row";
import {StarshipDetails, StarshipList} from "../components/sw-components";
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
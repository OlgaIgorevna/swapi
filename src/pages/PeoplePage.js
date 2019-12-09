import React from 'react';
import {withRouter} from 'react-router-dom';
import Row from "../components/row/Row";
import {PersonDetails, PersonList} from "../components/sw-components";

const PeoplePage= ({history, match})=>{
console.log("match.params", match.params);
        return(
            <Row left={<PersonList onSelect={(id)=>{history.push(id)}}/>}
                 right={<PersonDetails itemId={match.params.id}/>}/>
        )

};
export default withRouter(PeoplePage);
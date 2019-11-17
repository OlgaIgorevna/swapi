import React from 'react';

import ItemDetail from "../item-detail/ItemDetail";
import Record from "../record/Record";
import withDataUpdate from "../Hoc-helpers/WithDataUpdate";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context"
import withSwapiService from "../Hoc-helpers/WithSwapiService"

/*const swapiService = new SwapiService();*/

/*const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage

} = swapiService;*/



/*const PersonDetails = ({itemId})=>{
    return <SwapiServiceConsumer>
        {
            ({getPerson, getPersonImage}) => {
                let Component = withDataUpdate(
                    ItemDetail,
                    getPerson,
                    getPersonImage,
                    itemId,
                );
                return <Component>
                    <Record field="gender" label="Gender"/>
                    <Record field="eyeColor" label="Eye Color"/>
                </Component>
            }
        }
    </SwapiServiceConsumer>
};*/
const PlanetDetails = ({itemId})=>{
    return <SwapiServiceConsumer>
        {
            ({getPlanet, getPlanetImage}) => {
                let Component = withDataUpdate(
                    ItemDetail,
                    getPlanet,
                    getPlanetImage,
                    itemId,
                );
                return <Component>
                    <Record field = "name" label = "Name"/>
                    <Record field = "population" label = "population"/>
                </Component>
            }
        }
    </SwapiServiceConsumer>
};

const StarshipDetails =({itemId})=>{
    return <SwapiServiceConsumer>
        {
            ({getStarship, getStarshipImage}) => {
                let Component = withDataUpdate(
                    ItemDetail,
                    getStarship,
                    getStarshipImage,
                    itemId,
                );
                return <Component>
                    <Record field = "name" label = "Name"/>
                    <Record field = "length" label = "length"/>
                    <Record field = "cost_in_credits" label = "Cost"/>
                </Component>
            }
        }
    </SwapiServiceConsumer>
};

/*const StarshipDetails = ({itemId})=>{
    let Component = withDataUpdate(
        ItemDetail,
        getStarship,
        getStarshipImage,
        itemId,
    );
    return <Component>
        <Record field = "name" label = "Name"/>
        <Record field = "length" label = "length"/>
        <Record field = "cost_in_credits" label = "Cost"/>
    </Component>
};*/

export {
    PlanetDetails,
    StarshipDetails
}
/*const PersonDetailsOld = ({itemId})=>{
    return <ItemDetail
        getImgUrl={getPersonImage}
        getData={getPerson}
        itemId={itemId} >
        <Record field = "gender" label = "Gender"/>
        <Record field = "eyeColor" label = "Eye Color"/>
    </ItemDetail>
};*/
/*const PlanetDetailsWithoutContext = ({itemId})=>{
    let Component = withDataUpdate(
        ItemDetail,
        getPlanet,
        getPlanetImage,
        itemId,
    );
    return <Component>
        <Record field = "name" label = "Name"/>
        <Record field = "population" label = "population"/>
    </Component>
};*/


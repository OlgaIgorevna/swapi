import React from 'react';
import SwapiService from "../../services/swapi-service";
import ItemDetail from "../item-detail/ItemDetail";
import Record from "../record/Record";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage

} = swapiService;

const PersonDetails = ({itemId})=>{
    return <ItemDetail
        getImgUrl={getPersonImage}
        getData={getPerson}
        itemId={itemId} >
        <Record field = "gender" label = "Gender"/>
        <Record field = "eyeColor" label = "Eye Color"/>
    </ItemDetail>
};

const PlanetDetails = ({itemId})=>{
    return <ItemDetail
        getImgUrl={getPlanetImage}
        getData={getPlanet}
        itemId={itemId}>
        <Record field = "name" label = "Name"/>
        <Record field = "population" label = "population"/>

    </ItemDetail>
};

const StarshipDetails = ({itemId})=>{
 return <ItemDetail
         getImgUrl={getStarshipImage}
         getData={getStarship}
         itemId={itemId}>
         <Record field = "name" label = "Name"/>
         <Record field = "length" label = "length"/>
         <Record field = "cost_in_credits" label = "Cost"/>
    </ItemDetail>
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}





/*
const PersonList = withData(ItemsList, getAllPeople);
const PlanetList = withData(ItemsList, getAllPlanets);
const StarshipList = withData(ItemsList, getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList
}*/

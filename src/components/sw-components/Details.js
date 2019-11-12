import React from 'react';
import SwapiService from "../../services/swapi-service";
import ItemDetail from "../item-detail/ItemDetail";
import Record from "../record/Record";
import withDataUpdate from "../Hoc-helpers/WithDataUpdate";

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

    let Component = withDataUpdate(
        ItemDetail,
        getPerson,
        getPersonImage,
        itemId,
    );

    return <Component>
                <Record field = "gender" label = "Gender"/>
                <Record field = "eyeColor" label = "Eye Color"/>
           </Component>

};

const PlanetDetails = ({itemId})=>{

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
};

const StarshipDetails = ({itemId})=>{

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
};
const PersonDetailsOld = ({itemId})=>{
    return <ItemDetail
        getImgUrl={getPersonImage}
        getData={getPerson}
        itemId={itemId} >
        <Record field = "gender" label = "Gender"/>
        <Record field = "eyeColor" label = "Eye Color"/>
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

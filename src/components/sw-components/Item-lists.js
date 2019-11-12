import React from 'react';
import SwapiService from "../../services/swapi-service";
import ItemsList from "../item-list/ItemsList";
import withData from "../Hoc-helpers/WithData";

const swapiService = new SwapiService();

const {
    getAllPlanets,
    getAllPeople,
    getAllStarships
} = swapiService;


const renderPlanetListItem = (planet)=>{
    return <div> {`${planet.name}, diameter: ${planet.diameter}` }</div>
};
const renderPersontListItem = (person)=>{
    return <div> {`${person.name}, Birth Year: ${person.birthYear}` }</div>
};
const renderStarshiptListItem = (ship)=>{
    return <div> {`${ship.name}` }</div>
};

const withChildFunction = (ViewComponent, func) =>{

    return (props) => {
        return <ViewComponent {...props}>
            {func}
        </ViewComponent>

    }


};


const PersonList = withData(withChildFunction(ItemsList, renderPersontListItem), getAllPeople);
const PlanetList = withData(withChildFunction(ItemsList, renderPlanetListItem), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemsList, renderStarshiptListItem), getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList
}
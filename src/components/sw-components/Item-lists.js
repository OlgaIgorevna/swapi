import React from 'react';
import SwapiService from "../../services/swapi-service";
import ItemsList from "../item-list/ItemsList";
import withData from "../Hoc-helpers/WithData";
import withSwapiService from "../Hoc-helpers/WithSwapiService";

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

const mapPersonMethodsToProps = (swapiService)=>{
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService)=>{
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService)=>{
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(withData(withChildFunction(ItemsList, renderPersontListItem)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ItemsList, renderPlanetListItem)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemsList, renderStarshiptListItem)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}
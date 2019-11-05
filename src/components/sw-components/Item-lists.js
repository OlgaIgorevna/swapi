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

const PersonList = withData(ItemsList, getAllPeople);
const PlanetList = withData(ItemsList, getAllPlanets);
const StarshipList = withData(ItemsList, getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList
}
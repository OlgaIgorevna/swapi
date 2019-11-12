import React from 'react';
import Header from "../header/Header"
import RandomPlanet from "../random-planet/Random-planet";
import ItemsList from "../item-list/ItemsList";
import ItemDetail from "../item-detail/ItemDetail";
import PeoplePage from "../peoplePage/PeoplePage";
import SwapiService from "../../services/swapi-service";
import Row from "../row/Row";
import Record from "../record/Record";
import {  PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
} from "../sw-components"
export default class App extends React.Component {
    swapiService = new SwapiService();

    header =  {title: 'Star DB',
        menu: [{to: "#", label: "people"},
            {to: "#", label: "planets"},
            {to: "#", label: "starships"}]};

    arrayClone = (arr)=> {
        let i, copy;
        if (Array.isArray(arr)) {
            copy = arr.slice(0);
            for (i = 0; i < copy.length; i++) {
                copy[i] = this.arrayClone(copy[i]);
            }
            return copy;
        } else if(typeof arr === 'object') {
            let obj = {};
            for (let key in arr) {
                if ((Array.isArray(arr[key])) || (typeof arr[key] === 'object')) {
                    obj = {...obj, [key]: this.arrayClone(arr[key]) }
                }
                else {
                    obj = {...obj, [key]: arr[key]}
                }
            }
            return obj;
        } else {
            return arr;
        }
    };

    renderPlanetListItem = (planet)=>{
        return <div> {`${planet.name}, diameter: ${planet.diameter}` }</div>
    };
    renderPersontListItem = (person)=>{
        return <div> {`${person.name}, Birth Year: ${person.birthYear}` }</div>
    };

    render() {
        const personDetail =  (
            <ItemDetail
                getImgUrl={this.swapiService.getPersonImage}
                getData={this.swapiService.getPerson}
                itemId={11} >
                <Record field = "gender" label = "Gender"/>
                <Record field = "eyeColor" label = "Eye Color"/>
            </ItemDetail>

            );
        const starshipDetail =  (
            <ItemDetail
                getImgUrl={this.swapiService.getStarshipImage}
                getData={this.swapiService.getStarship}
                itemId={5}>
                <Record field = "name" label = "Name"/>
                <Record field = "length" label = "length"/>
                <Record field = "cost_in_credits" label = "Cost"/>
            </ItemDetail>
                );
        return (
            <div className={"container"}>
                <Header {...this.header}/>
                <RandomPlanet />
                {/*<PeoplePage/>*/}
                <div className="f-row f-row_start row-detail">
                    {/*<ItemsList getData={this.swapiService.getAllPlanets} onSelect={()=>{}} renderItem={this.renderPlanetListItem}/>*/}
                 {/*   <ItemsList getData={this.swapiService.getAllPeople} onSelect={()=>{}} renderItem={this.renderPersontListItem}/>*/}

                 <PersonList onSelect={()=>{}} renderItem={this.renderPersontListItem}/>
                 <PlanetList onSelect={()=>{}} renderItem={this.renderPlanetListItem}/>
                 <PersonDetails itemId={4} />
                 <PlanetDetails itemId={6}/>
                 <StarshipDetails itemId={9} />
                </div>

                {/*<Row left={personDetail} right={starshipDetail}/>*/}
            </div>
        )

    }

}
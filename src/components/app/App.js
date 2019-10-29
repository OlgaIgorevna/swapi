import React from 'react';
import Header from "../header/Header"
import RandomPlanet from "../random-planet/Random-planet";
import ItemsList from "../item-list/ItemsList";
import ItemDetail from "../item-detail/ItemDetail";
import PeoplePage from "../peoplePage/PeoplePage";
import SwapiService from "../../services/swapi-service";
import Row from "../row/Row";
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

    render() {
        const personDetail =  (<ItemDetail getImgUrl={this.swapiService.getPersonImage} getData={this.swapiService.getPerson} itemId={11}/>);
        const starshipDetail =  (<ItemDetail getImgUrl={this.swapiService.getStarshipImage} getData={this.swapiService.getStarship} itemId={5}/>);
        return (
            <div className={"container"}>
                <Header {...this.header}/>
              {/*  <RandomPlanet />
                <PeoplePage/>*/}
               {/* <div className="f-row f-row_start row-detail">
                    <ItemsList getData={this.swapiService.getAllPlanets} onSelect={()=>{}}/>
                </div>*/}
                <Row left={personDetail} right={starshipDetail}/>
            </div>
        )

    }

}
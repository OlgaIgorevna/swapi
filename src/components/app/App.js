import React from 'react';
import Header from "../header/Header"
import RandomPlanet from "../random-planet/Random-planet";
import SwapiService from "../../services/swapi-service";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context"
import {
    StarshipDetails,
} from "../sw-components"
import Row from "../row/Row";
import PeoplePage from "../../pages/PeoplePage";
import PlanetPage from "../../pages/PlanetPage";
import StarshipPage from "../../pages/StarshipPage";
import SecretPage from "../../pages/SecretPage";
import LoginPage from "../../pages/LoginPage";
export default class App extends React.Component {
    swapiService = new SwapiService();

    state={
        isLoggedIn: false
    };
    onLogin=()=>{
        this.setState({isLoggedIn: true})
    };

    header =  {title: 'Star DB',
        menu: [{to: "/people/", label: "people"},
            {to: "/planets/", label: "planets"},
            {to: "/starships/", label: "starships"},
            {to: "/login/", label: "login page"},
            {to: "/secretpage/", label: "secret page"},
        ]};

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

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className={"container"}>
                        <Header {...this.header}/>
                        <RandomPlanet updateInterval={10000}/>
                        <Switch>
                            <Route path={"/"} exact={true} render={()=>{return <h2>Welcome to StarDB</h2>}}/>
                            <Route path={"/people/:id?"} component={PeoplePage}/>
                            <Route path={"/planets"} component={PlanetPage}/>
                            <Route path={"/starships"} exact={true} component={StarshipPage}/>
                            <Route path={"/starships/:id"} render={({match,location,history})=>{
                                    return <StarshipDetails itemId={match.params.id}/>
                                }}/>
                            <Route path={"/login"}
                                   render={()=>{
                                       return <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
                                   }}/>
                            <Route path={"/secretpage"}
                                   render={()=>{
                                       return <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                                   }}/>
                            {/*<Redirect to={"/"}/>*/}
                            <Route render={()=>{return <div>Page not found</div>}}/>
                        </Switch>

                     {/*   <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/>*/}
                    </div>
                </Router>
            </SwapiServiceProvider>
        )

    }

}
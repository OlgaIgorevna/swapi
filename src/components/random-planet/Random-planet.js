import React from 'react';
import './random-planet.css';
import "../../services/swapi-service";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

export default class RandomPlanet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            planet: {},
            loading: true,
            error: false
        };


    }
    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    swapiService = new SwapiService();

    onPlanetLoaded = (planet)=>{
        this.setState({planet, loading: false})
    };
    onErrorLoading = (err)=>{
        this.setState({error: true, loading: false})
    };
    updatePlanet =()=>{
        const id = Math.floor(Math.random()*25 + 1);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErrorLoading)
    };

     render() {
         const {error, loading, planet} = this.state;
         const hasData = !(loading || error);
         const errorMessage = error ?  <ErrorIndicator/> : null;
         const spinner = loading ? <Spinner/> : null;
         const content = hasData ? <PlanetView planet={planet}/> : null;
         return (

             <div className={"random-planet"}>
                 {errorMessage}
                 {spinner}
                 {content}
             </div>
         );
     }
};

const PlanetView = ({planet})=>{
    const {id, name,population,rotationPeriod,diameter} = planet;
    return (

        <div className="row-planet">
            <div className="image-planet">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>
            <div className="data-planet">
                <div className="name">{name}</div>
                <div className="data">
                    <div className={" row-info"}>
                        <div className="label">Population</div>
                        <div className="value">{population}</div>
                    </div>
                    <div className={" row-info"}>
                        <div className="label">Rotation Period</div>
                        <div className="value">{rotationPeriod}</div>
                    </div>
                    <div className={" row-info"}>
                        <div className="label">Diameter</div>
                        <div className="value">{diameter}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

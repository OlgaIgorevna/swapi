import React from 'react';
import ItemsList from "../item-list/ItemsList";
import ItemDetail from "../item-detail/ItemDetail";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/Row";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

export default class PeoplePage extends React.Component{

    state = {
        personSelected: 3,
    };
    swapiService = new SwapiService();
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    onItemSelect = (id)=>{
        this.setState({
            personSelected: id
        });
        console.log(`id ${id} label onSelect`)
    };


    renderPeopleItem = (item)=>{
        return <span>{item.name} {item.birthYear}</span>
    };
    render(){
        const {personSelected} = this.state;


        const itemsList = <ItemsList renderItem={this.renderPeopleItem}
                                     getData={this.swapiService.getAllPeople}
                                     onSelect={this.onItemSelect}/>;
        const personDetail = <ItemDetail itemId={personSelected}/>
        return(
            <ErrorBoundary>
                 <Row left={itemsList} right={personDetail}/>
            </ErrorBoundary>

                )
    }


}
import React from 'react';
import Row from "../components/row/Row";
import {PersonDetails, PersonList} from "../components/sw-components";

export default class PeoplePage extends React.Component {

    state={
        selectedItem: null
    };

    selectItem = (id)=>{
        this.setState({selectedItem: id})
    };

    render(){
        return(
            <Row left={<PersonList onSelect={this.selectItem}/>} right={<PersonDetails itemId={this.state.selectedItem}/>}/>
        )
    }
}
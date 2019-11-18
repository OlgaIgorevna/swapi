import React from 'react';
import Row from "../components/row/Row";
import {PlanetDetails, PlanetList} from "../components/sw-components";

export default class PlanetPage extends React.Component {

    state={
        selectedItem: null
    };

    selectItem = (id)=>{
        this.setState({selectedItem: id})
    };

    render(){
        return(
            <Row left={<PlanetList onSelect={this.selectItem}/>} right={<PlanetDetails itemId={this.state.selectedItem}/>}/>
        )
    }
}
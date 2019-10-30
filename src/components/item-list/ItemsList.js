import React from 'react';
import './items-list.css';

import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi-service";
import withData from "../Hoc-helpers/WithData";

 const ItemsList = (props)=>{

   const renderItems = (arr)=>{
        if (!arr) return null;
        return arr.map((item) =>
            <div className={"item list-group-item"} key={item.id} onClick={() => {
                props.onSelect(item.id)
            }}>
                {props.renderItem(item)}
            </div>
        )
    };

        const {data} =props;
        const items = renderItems(data);
        return (
            <div className={"items-list"}>
                {items}
            </div>
        )
};



const {getAllPeople} = new SwapiService();

export default withData(ItemsList, getAllPeople);
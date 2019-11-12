import React from 'react';
import './items-list.css';


 const ItemsList = (props)=>{

     console.log("children", props.children);

   const renderItems = (arr)=>{
        if (!arr) return null;
        return arr.map((item) =>
            <div className={"item list-group-item"} key={item.id} onClick={() => {
                props.onSelect(item.id)
            }}>
                {props.children(item)}
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



//const {getAllPeople} = new SwapiService();

//export default withData(ItemsList, getAllPeople);

export default ItemsList;
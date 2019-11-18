import React from 'react';
import './items-list.css';
import PropTypes from 'proptypes'

 const ItemsList = (props)=>{
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
/* ItemsList.defaultProps = {
     onSelect: ()=>{}
 }*/;
ItemsList.propTypes={
    onSelect: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};
//const {getAllPeople} = new SwapiService();

//export default withData(ItemsList, getAllPeople);

export default ItemsList;
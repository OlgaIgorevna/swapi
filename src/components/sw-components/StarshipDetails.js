import React from 'react';
import withDataUpdate from "../Hoc-helpers/WithDataUpdate";
import ItemDetail from "../item-detail/ItemDetail";
import Record from "../record/Record";
import withSwapiService from "../Hoc-helpers/WithSwapiService";

const StarshipDetails = ({itemId, getData, getImageUrl})=>{
    let Component = withDataUpdate(
        ItemDetail,
        getData,
        getImageUrl,
        itemId,
    );
    return <Component>
        <Record field = "name" label = "Name"/>
        <Record field = "length" label = "length"/>
        <Record field = "cost_in_credits" label = "Cost"/>
    </Component>
};
const mapMethodsToProps = (swapiService)=>{
    return{
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
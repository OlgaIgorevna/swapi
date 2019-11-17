import React from 'react';
import withDataUpdate from "../Hoc-helpers/WithDataUpdate";
import ItemDetail from "../item-detail/ItemDetail";
import Record from "../record/Record";
import withSwapiService from "../Hoc-helpers/WithSwapiService";

const PlanetDetails = ({itemId, getData, getImageUrl})=>{
    let Component = withDataUpdate(
        ItemDetail,
        getData,
        getImageUrl,
        itemId,
    );
    return <Component>
        <Record field = "name" label = "Name"/>
        <Record field = "population" label = "population"/>
    </Component>
};
const mapMethodsToProps = (swapiService)=>{
    return{
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);

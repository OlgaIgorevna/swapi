import React from 'react';
import withDataUpdate from "../Hoc-helpers/WithDataUpdate";
import ItemDetail from "../item-detail/ItemDetail";
import Record from "../record/Record";
import withSwapiService from "../Hoc-helpers/WithSwapiService";

const PersonDetails = ({itemId, getData, getImageUrl})=>{
        let Component = withDataUpdate(
            ItemDetail,
            getData,
            getImageUrl,
            itemId,
        );
        return <Component>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </Component>
};
const mapMethodsToProps = (swapiService)=>{
    return{
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);


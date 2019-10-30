import React from 'react';

const Record = ({item, field, label})=>{
    console.log("item field label", item, field, label);
    return (
        <div className={"list-group-item row-info"}>
            <div className="label">{label}</div>
            <div className="value">{item[field]}</div>
        </div>
    )
};
export default Record;
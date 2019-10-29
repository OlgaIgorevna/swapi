import React from "react";
const Row = ({left, right})=>{
    return(
        <div className="f-row f-row_start row-detail">
            <div className="col-md-6  col-xs-12">{left}</div>
            <div className="col-md-6  col-xs-12">{right}</div>
        </div>
    )
};
export default Row;
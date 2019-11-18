import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
const Header = (props)=>{
console.log("props", props);
    return(

            <div className="header">
                <div className="title-header">
                    <Link to={"/"} exact={true}>
                    {props.title}
                    </Link>
                </div>
                <div className="menu">
                    {props.menu.map((item)=>
                        <Link className={"menu-item"} to={item.to}>{item.label}</Link>
                    )}
                </div>
            </div>


    )
};
export default Header;
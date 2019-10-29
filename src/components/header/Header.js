import React from 'react';
import './header.css';
const Header = (props)=>{
console.log("props", props);
    return(

            <div className="header">
                <div className="title-header">
                    {props.title}
                </div>
                <div className="menu">
                    {props.menu.map((item)=>
                        <a className={"menu-item"} href={item.to}>{item.label}</a>
                    )}
                </div>
            </div>


    )
};
export default Header;
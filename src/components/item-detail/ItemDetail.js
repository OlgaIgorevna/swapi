import React from 'react';
import '../../css/detail.css';

const ItemDetail =(props)=> {

    const renderData = (item)=>{
        return(
            <React.Fragment>
                    {
                        React.Children.map(props.children, (child, idx)=>{
                            return React.cloneElement(child, {item} )
                        })
                    }
            </React.Fragment>
        )
    };

        const {item, image} = props;

        return (
            <div className={"detail"}>
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>

                    <div className="info">
                         {renderData(item)}

                        <ErrorButton></ErrorButton>
                    </div>
            </div>
        )

}
export default ItemDetail;

class ErrorButton extends React.Component{
    state={
        renderError: false
    };
    render(){

    if(this.state.renderError) {
        this.foo.bar = 0;
    }
        return(
            <button onClick = {()=>{this.setState({renderError: true})}}>error button</button>
        )
    }
}
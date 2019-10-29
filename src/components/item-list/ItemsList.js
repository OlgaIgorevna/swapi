import React from 'react';
import './items-list.css';

import Spinner from "../spinner/spinner";

class ItemsList extends React.Component{

    constructor(props){
      super(props);
      this.state={
          itemsList: null
      }
    }
    componentDidMount() {
        this.props.getData()
                .then((itemsList)=>{
                    this.setState({itemsList: itemsList})
                })
    }

    renderItems=(arr)=>{
        return arr.map((item) =>
            <div className={"item list-group-item"} key={item.id} onClick={() => {
                this.props.onSelect(item.id)
            }}>
                {this.props.renderItem(item)}
            </div>
        )
    };

    render() {
        const {itemsList} = this.state;
        if (!itemsList) return <Spinner/>;
        const items = this.renderItems(itemsList);
        return (
            <div className={"items-list"}>
                {items}
            </div>
        )
    }
}
export default ItemsList;
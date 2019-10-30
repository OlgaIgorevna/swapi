import React from 'react';
import '../../css/detail.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

class ItemDetail extends React.Component {

    constructor(props){
        super(props);

        this.state={
            item: null,
            image: null,
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem = ()=>{
        const {itemId, getData, getImgUrl} = this.props;

        if (!itemId) {return;}
        this.setState({loading: true});

        getData(itemId)
            .then((item)=>{
                this.setState({
                    item: item,
                    image: getImgUrl(item),
                    error: false
                })
            })
            .then(()=>{
                this.setState({loading: false})
            })
            .catch(()=>{
                this.setState({loading: false, error: true})
            })
    };



    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemId !== prevProps.itemId) {
             this.updateItem();
        }
    }
    renderData = (item)=>{

        return(
            <React.Fragment>
                    {
                        React.Children.map(this.props.children, (child, idx)=>{

                            return React.cloneElement(child, {item} )

                        })
                    }

            </React.Fragment>
        )
    };
    render(){
        const {loading} = this.state;
        if ((!this.state.item)&& (!this.state.error)) return <span>Please, choose a person from a list</span>;
        if (this.state.error) return <ErrorIndicator/>
        const {item} = this.state;


      /*const content = loading ? <Spinner/> : this.renderData(item);*/
        return (
            <div className={"detail"}>
             {/*   {content}*/}

                    <div className="image">
                        <img src={this.state.image} alt=""/>
                    </div>

                    <div className="info">
                         {this.renderData(item)}

                        <ErrorButton></ErrorButton>

                    </div>

            </div>
        )
    };
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
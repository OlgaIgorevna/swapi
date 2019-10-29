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
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem = ()=>{
        const {itemId} = this.props;
        if (!itemId) {return;}
        this.setState({loading: true});
        this.swapiService.getPerson(itemId)
            .then((item)=>{
                this.setState({item: item, error: false})
            })
            .then(()=>{
                this.setState({loading: false})
            })
            .catch(()=>{
                this.setState({loading: false, error: true})
            })
    };

    swapiService = new SwapiService();

    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemId !== prevProps.itemId) {
             this.updateItem();
        }
    }
    renderData = (item, personId)=>{
        const  {name, gender, birthYear, eyeColor} = item;
        return(
            <React.Fragment>
                <div className="image">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`} alt=""/>
                </div>
                <div className="info">
                    <div className={"list-group-item row-info"}>
                        <div className="label">Name</div>
                        <div className="value">{name}</div>
                    </div>
                    <div className={"list-group-item row-info"}>
                        <div className="label">Gender</div>
                        <div className="value">{gender}</div>
                    </div>
                    <div className={"list-group-item row-info"}>
                        <div className="label">Birth year</div>
                        <div className="value">{birthYear}</div>
                    </div>
                    <div className={"list-group-item row-info"}>
                        <div className="label">Eye Color</div>
                        <div className="value">{eyeColor}</div>
                    </div>

                    <ErrorButton></ErrorButton>

                </div>
            </React.Fragment>
        )
    };
    render(){
        const {loading} = this.state;
        if ((!this.state.item)&& (!this.state.error)) return <span>Please, choose a person from a list</span>;
        if (this.state.error) return <ErrorIndicator/>
        const {item} = this.state;
        const {itemId} = this.props;

      const content = loading ? <Spinner/> : this.renderData(item, itemId);
        return (
            <div className={"detail"}>
                {content}
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
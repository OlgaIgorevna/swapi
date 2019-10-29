import React from 'react';
import '../../css/detail.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

class PersonDetail extends React.Component {

    constructor(props){
        super(props);

        this.state={
            person: null,
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.updatePerson();
    }

    updatePerson = ()=>{
        const {personId} = this.props;
        if (!personId) {return;}
        this.setState({loading: true});
        this.swapiService.getPerson(personId)
            .then((person)=>{
                this.setState({person: person, error: false})
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
        if (this.props.personId !== prevProps.personId) {
             this.updatePerson();
        }
    }
    renderData = (person, personId)=>{
        const  {name, gender, birthYear, eyeColor} = person;
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
        if ((!this.state.person)&& (!this.state.error)) return <span>Please, choose a person from a list</span>;
        if (this.state.error) return <ErrorIndicator/>
        const {person} = this.state;
        const {personId} = this.props;

      const content = loading ? <Spinner/> : this.renderData(person, personId);
        return (
            <div className={"detail"}>
                {content}
            </div>
        )
    };
}
export default PersonDetail;

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
import React from 'react';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const withDataUpdate = (ViewComponent, getData, getImgUrl, itemId)=>{

     return class extends React.Component {

         state={
                item: null,
                image: null,
                loading: false,
                error: false
            };

        componentDidMount() {
            this.updateItem();
        }

        updateItem = ()=>{
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

        render(){
            const {item, image, loading, error} = this.state;

            if ((!item)&& (!error) && (!loading)) return <span>Please, choose a person from a list</span>;
            if (error) return <ErrorIndicator/>;
            if (loading) return <Spinner/>;

            return(
                <ViewComponent {...this.props} item={item} image={image}>
                    {this.props.children}
                </ViewComponent>
            )
        }
    }
};
export default withDataUpdate;
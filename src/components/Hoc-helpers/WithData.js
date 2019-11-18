import React from 'react';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const withData = (ViewComponent)=>{
    return class extends React.Component {
        state={
            data: null,
            loading: true,
            error: false
        };
        componentDidMount() {
            this.props.getData()
                .then((data)=>{
                    this.setState({data: data, error: false})
                })
                .then(()=>{
                    this.setState({loading: false})
                })
                .catch(()=>{
                    this.setState({loading: false, error: true})
                })
        }
        render(){
            const {data, loading, error} = this.state;
            if (error) return <ErrorIndicator/>;
            if (loading) return <Spinner/>;


            return <ViewComponent {...this.props} data={data}/>
        }
    }
};

        export default withData;
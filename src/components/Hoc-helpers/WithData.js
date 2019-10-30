import React from 'react';
import Spinner from "../spinner/spinner";

const withData = (ViewComponent, getData)=>{
    return class extends React.Component {

        state={
            data: null
        };

        componentDidMount() {
            getData()
                .then((data)=>{
                    this.setState({data: data})
                })
        }

        render(){
            const {data} = this.state;

            if (!data) return <Spinner/>;

            return <ViewComponent {...this.props} data={data}/>
        }
    }
};

        export default withData;
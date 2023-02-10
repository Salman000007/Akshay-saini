import React from "react";

class SecondChild extends React.Component {
    constructor(props){
        super(props)
        // console.log('second child Constructor')
    }
    componentDidMount(){
        // console.log('second child component did mount')
    }

    componentWillUnmount(){
        // console.log('second child component Unmounte')
    }
    render(){
        // console.log('second child render')
        return(
            <>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}

export default SecondChild;
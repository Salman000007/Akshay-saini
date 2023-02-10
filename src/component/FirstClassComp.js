import React from "react";

class FirstChild extends React.Component {
    constructor(props){
        super(props)
        // console.log('first child constructor')
        this.state = {
            count: 0,
            toggle: 0
        }
    }
    componentDidMount(){
        // console.log('first child component')
    }
    componentWillUnmount(){
        // console.log('first child component Unmounte')
    }
    render(){
       const  {count}= this.state;
    //    console.log('fisrt child render')
       const setToggle = () => {
        if(this.state.toggle==true){
            this.setState({ toggle: false })
        }
        else if(this.state.toggle==false){
            this.setState({toggle:true})
        }

       }
        return (
            <>  <h2>{count} zero</h2>
                <h2>{this.props.name}</h2>
                <button onClick={()=> this.setState({
                    count: this.state.count+1
                })}>Click Me</button>
                {this.state.toggle? <h1>Toggle is true</h1> : <h1>{}</h1>}
                <button onClick={setToggle}>Toggle</button>
            </>
        )
    }
}

export default FirstChild;
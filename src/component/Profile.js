import React from "react";
import FirstChild from "./FirstClassComp";
import SecondChild from "./SecondClassComp";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructure");
    this.state = {
      count: "",
    };
  }
  async componentDidMount() {
    // this.x = setInterval(() => {
    //   console.log("parent component did mount");
    // }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.x);
    // console.log("component will unmount");
  }
  render() {
    return (
      <>
        {console.log("parent render")}
        <h1>This is the class component </h1>
        {/* <h2>{this.state.count}</h2> */}
        {/* <button onClick={()=> this.setState({
                count:this.state.count +1
            })}>Click</button> */}
        <FirstChild name={"salman"} />
        <SecondChild name={"shaikh"} />
      </>
    );
  }
}

export default Profile;

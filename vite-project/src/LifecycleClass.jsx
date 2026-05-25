import React, { Component } from "react";

class LifecycleClass extends Component {
  constructor(props) {
    console.log("constructor called..");
    super(props);
    this.state = {
      name: "Test",
      age:this.props.age
    };
  }
  componentDidMount() {
    console.log("componentDidMount called..");
    setTimeout(() => {
      this.setState({
        name: "abc",
      });
    },3000);
  }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps called..');
    console.log('Data from state is ');
    console.log(state);

    console.log('Data from props is ');
    console.log(props);
    return null   
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate called...');
    
        return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate called..');
    console.log('Data from prev state is ');
    console.log(prevState);
    console.log('Data from prev props is ');
    console.log(prevProps);
    return null
  }
  componentDidUpdate(){
    console.log('Finally component updated...');
    
  }
  render() {
    console.log("render called..");
    return (
      <div>
        <h3>Lifecycle Example- Class Component</h3>
        <h4>Name is -- {this.state.name}</h4>
      </div>
    );
  }
}
export default LifecycleClass;

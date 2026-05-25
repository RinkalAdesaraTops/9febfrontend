import { Component } from "react";

class ClassExample extends Component{
    constructor(){
        super()
        this.state = {
            count:10,
            data:[]
        }        
    }
    addCounter = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return (
            <div>
                <h3>Count is -- {this.state.count}</h3>
                <button onClick={this.addCounter}>Add</button>
                <button onClick={this.addCounter}>Minus</button>
                <button onClick={this.addCounter}>Reset</button>
            </div>
        )
    }
}
export default ClassExample
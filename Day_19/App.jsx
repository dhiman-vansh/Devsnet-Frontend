import React, { Component } from "react";

let x= 0;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            out: 0 
        }
    }

    
    Add = () => {
        x++;
        this.setState({out: this.state.out +1})
    }

    render() {
        console.log(this.state.out)
        let final = this.state.out;
        return(
            <div>
            <button onClick={this.Add}>
                {this.state.out}
            </button>
            </div>
        )
       
    }

}
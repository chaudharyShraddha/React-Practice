import React from "react";

class Counter extends React.Component{
    constructor( props ){
        super( props );

        this.state = {
            count : 0
        }
    }
    Increment(){
        this.setState( (prewState) => ({
            count : prewState.count + 1
        }) )
    }
    render(){
        return(
            <div>
                <h1>Count - {this.state.count} </h1>
                <button onClick={ () => this.Increment() }>Increment</button>
            </div>
        )
    }
}

export default Counter;
import React from "react";

class Class_State extends React.Component{
    constructor(){
        super();
        this.state = {
            message : "Welcome Visiors!"
        }
    }
    ChangeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick = { () => this.ChangeMessage() } >Subscribe</button>
            </div>
        )
    }
}

export default Class_State;
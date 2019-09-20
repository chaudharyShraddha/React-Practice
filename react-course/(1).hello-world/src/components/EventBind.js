import React from "react";

class EventBind extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            message : "hello welcome!"
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState ({
    //         message: "goodbye!"
    //     })
    // }

    clickHandler = () => {
        this.setState ({
            message: "GoodBye!"
        })
    }
    render(){
        return(
            <div>
                <h1> { this.state.message } </h1>
                {/* <button onClick={ this.clickHandler.bind(this) }>Click</button> */}
                {/* <button onClick={ () => this.clickHandler() }>Click</button> */}
                <button onClick={ this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default EventBind;
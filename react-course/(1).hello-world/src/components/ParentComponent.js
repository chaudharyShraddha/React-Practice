import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponet extends React.Component{
    constructor( props ){
        super( props );

        this.state = {
            message: "parent"
        }
    }
    ParentCall = ( childName ) => {
        alert(`hello from ${this.state.message} to ${childName}`);
    }
    
    render(){
        return (
            <div>
                <ChildComponent ParentCall = {this.ParentCall} />
            </div>
        )
    }
}

export default ParentComponet;
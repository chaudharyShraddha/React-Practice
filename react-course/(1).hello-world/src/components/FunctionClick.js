import React from "react";

const FunctionClick = () => {
    
    const clickEvent = () => {
        return (
           console.log("click")
        )
    }
    return(
        <div>
            <h1>Event-Handler</h1>
            <button onClick = {clickEvent} >Click</button>
        </div>
    )
}
export default FunctionClick;
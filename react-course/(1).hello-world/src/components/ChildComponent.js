import React from "react";

function ChildComponent ( props ){
    return (
        <div>
            <button onClick={() => props.ParentCall("shraddha") }>Parent Call</button>
        </div>
    )
}

export default ChildComponent;
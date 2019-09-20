import React from "react";

const Function_Props = ( props ) => {
    const { name, age } = props;
    return (
        <div>
            <p> Hello {name}! and you are { age } old! </p>
            { props.children }
        </div>
    )
}

export default Function_Props;
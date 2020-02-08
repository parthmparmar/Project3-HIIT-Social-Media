import React from "react";

function Wrapper(props) {

    return (
        <div className="container mt-3">
            {props.children}
        </div>
    )
}

export default Wrapper;
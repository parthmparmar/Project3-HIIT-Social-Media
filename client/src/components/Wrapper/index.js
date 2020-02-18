import React from "react";

function Wrapper(props) {

    return (
        <div className="mx-1 mx-sm-3 mx-md-5 mt-3">
            {props.children}
        </div>
    )
}

export default Wrapper;
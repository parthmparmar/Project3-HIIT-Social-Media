import React from "react";

function MembersCard(props) {
    return (
        <div>
            <div className="card bg-dark text-white col-md-4" id={props.id}>
                <img src="/assets/avatar/girl-pink.png" className="card-img" alt="member"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{props.userData.firstName} {props.userData.lastName}</h5>
                    <p className="card-text">{props.userData.box}</p>
                    <button type="button" className="btn btn-primary" onClick={()=>props.click(props.id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default MembersCard;
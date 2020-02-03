import React from "react";

function MembersCard(props) {

    return (
        <div>
            <div className="card bg-dark text-white col-md-4">
                <img src="/assets/avatar/girl-pink.png" className="card-img" alt="member"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">User Name</h5>
                    <p className="card-text">Gym</p>
                </div>
            </div>
        </div>
    )
}

export default MembersCard;
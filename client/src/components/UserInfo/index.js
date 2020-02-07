import React from "react";

function UserInfo(props) {

    return (
        <div>
            <div className="user-info card mb-3 mt-5" style={{ maxWidth: 600 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="/assets/avatar/avataaars.png" className="card-img" alt="avatar" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{firstLetterCap(props.userData.firstName)} {firstLetterCap(props.userData.lastName)}</h5>
                            <p className="card-text">{props.userData.status ? props.userData.status : "No Status"}</p>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Division: {firstLetterCap(props.userData.gender)}</li>
                <li className="list-group-item">Age: {props.userData.age}</li>
                <li className="list-group-item">Height: {props.userData.height.height}</li>
                <li className="list-group-item">Weight: {props.userData.weight.weight} LB</li>
                <li className="list-group-item">Box: {props.userData.box}</li>
            </ul>
            </div>
        </div>

    )
}

function firstLetterCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default UserInfo;
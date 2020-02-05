import React from "react";

function UserInfo() {

    return (
        <div>
            <div className="user-info card mb-3 mt-5" style={{ maxWidth: 600 }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="/assets/avatar/avataaars.png" className="card-img" alt="avatar" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">User Name</h5>
                            <p className="card-text">User Bio: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Division: Male</li>
                <li className="list-group-item">Age: 30</li>
                <li className="list-group-item">Height: 5'7"</li>
                <li className="list-group-item">Weight: 195 LB</li>
                <li className="list-group-item">Box: Corossfit Mayhem</li>
            </ul>
            </div>
        </div>

    )
}

export default UserInfo;
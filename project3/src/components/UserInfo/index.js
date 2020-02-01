import React from "react";

function UserInfo() {

    return (
        <div>
            <div class="user-info card mb-3 mt-5" style={{ maxWidth: 600 }}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="/assets/avatar/avataaars.png" class="card-img" alt="avatar" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">User Name</h5>
                            <p class="card-text">User Bio: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <ul class="list-group list-group-horizontal">
                <li class="list-group-item">Division: Male</li>
                <li class="list-group-item">Age: 30</li>
                <li class="list-group-item">Height: 5'7"</li>
                <li class="list-group-item">Weight: 195 LB</li>
                <li class="list-group-item">Box: Corossfit Mayhem</li>
            </ul>
            </div>
        </div>

    )
}

export default UserInfo;
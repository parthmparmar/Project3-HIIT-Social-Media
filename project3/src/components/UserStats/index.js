import React from "react";

function UserStats() {

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
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Weight/Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deadlift</td>
                <td>450</td>
              </tr>
              <tr>
                <td>Back Squat</td>
                <td>425</td>
              </tr>
              <tr>
                <td>Snatch</td>
                <td>205</td>
              </tr>
              <tr>
                <td>Clean And Jerk</td>
                <td>305</td>
              </tr>
              <tr>
                <td>Overhead Press</td>
                <td>205</td>
              </tr>
              <tr>
                <td>Fran</td>
                <td>2:25</td>
              </tr>
              <tr>
                <td>Grace</td>
                <td>4:25</td>
              </tr>
              <tr>
                <td>Hellen</td>
                <td>8:34</td>
              </tr>
              <tr>
                <td>5k Run</td>
                <td>24:45</td>
              </tr>
              <tr>
                <td>400m Sprint</td>
                <td>1:25</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>


    )
}

export default UserStats;
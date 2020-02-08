import React from "react";

function UserStats(props) {

    return (
        <div>
        <div className="user-info card col-md-4" style={{ maxWidth: 600 }}>
            {/* <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="/assets/avatar/avataaars.png" class="card-img" alt="avatar" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.userData.firstName}</h5>
    <p class="card-text">{props.userData.status}</p>
                    </div>
                </div>
            </div> */}
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Weight/Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deadlift</td>
                <td>{props.userData.deadlift.deadlift}</td>
              </tr>
              <tr>
                <td>Back Squat</td>
                <td>{props.userData.backSquat.backSquat}</td>
              </tr>
              <tr>
                <td>Snatch</td>
                <td>{props.userData.snatch.snatch}</td>
              </tr>
              <tr>
                <td>Clean And Jerk</td>
                <td>{props.userData.cleanJerk.cleanJerk}</td>
              </tr>
              <tr>
                <td>Overhead Press</td>
                <td>{props.userData.overHeadPress.overHeadPress}</td>
              </tr>
              <tr>
                <td>Max Pull Ups</td>
                <td>{props.userData.maxPullUps.maxPullUps}</td>
              </tr>
              <tr>
                <td>Fran</td>
                <td>{props.userData.fran.fran}</td>
              </tr>
              <tr>
                <td>Grace</td>
                <td>{props.userData.grace.grace}</td>
              </tr>
              <tr>
                <td>Hellen</td>
                <td>{props.userData.hellen.hellen}</td>
              </tr>
              <tr>
                <td>5k Run</td>
                <td>{props.userData.fiveK.fiveK}</td>
              </tr>
              <tr>
                <td>400m Sprint</td>
                <td>{props.userData.fourHundredMeter.fourHundredMeter}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>


    )
}

export default UserStats;
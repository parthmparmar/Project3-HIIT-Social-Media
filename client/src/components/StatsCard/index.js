import React from "react";

function UserStats(props) {

    return (
        <div>
        <div className="user-info card col-md-4" style={{ maxWidth: 600 }}>
            {/* <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="/assets/avatar/avataaars.png" className="card-img" alt="avatar" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.userData.firstName}</h5>
    <p className="card-text">{props.userData.status}</p>
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
                <td>{props.userData.deadlift}</td>
              </tr>
              <tr>
                <td>Back Squat</td>
                <td>{props.userData.backsquat}</td>
              </tr>
              <tr>
                <td>Snatch</td>
                <td>{props.userData.snatch}</td>
              </tr>
              <tr>
                <td>Clean And Jerk</td>
                <td>{props.userData.cleanJerk}</td>
              </tr>
              <tr>
                <td>Overhead Press</td>
                <td>{props.userData.OverHeadPress}</td>
              </tr>
              <tr>
                <td>Max Pull Ups</td>
                <td>{props.userData.maxPullUps}</td>
              </tr>
              <tr>
                <td>Fran</td>
                <td>{props.userData.fran}</td>
              </tr>
              <tr>
                <td>Grace</td>
                <td>{props.userData.grace}</td>
              </tr>
              <tr>
                <td>Hellen</td>
                <td>{props.userData.hellen}</td>
              </tr>
              <tr>
                <td>5k Run</td>
                <td>{props.userData.FiveK}</td>
              </tr>
              <tr>
                <td>400m Sprint</td>
                <td>{props.userData.FourHundredMeter}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>


    )
}

export default UserStats;
import React from "react";

function UserStats(props) {

    return (
        <div>
          <div className="row">
          <i className="fas fa-dumbbell col-1"></i>
            <div className= "col-3">
        <table className="table .table-striped table-bordered">
            <thead>
              {/* <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Weight/Time</th>
              </tr> */}
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
            </tbody>
          </table>
          </div>
          <i className="fas fa-dumbbell col-1"></i>
          <div className= "col-3">
          <table className="table .table-striped table-bordered">
            <thead>
              {/* <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Weight/Time</th>
              </tr> */}
            </thead>
            <tbody>
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
            </tbody>
          </table>
          </div>
          <i className="fas fa-running col-1"></i>
          <div className="col-3">
          <table className="table .table-striped table-bordered">
            <thead>
              {/* <tr>
                <th scope="col">Exercise</th>
                <th scope="col">Weight/Time</th>
              </tr> */}
            </thead>
            <tbody>
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
    </div>

    )
}

export default UserStats;
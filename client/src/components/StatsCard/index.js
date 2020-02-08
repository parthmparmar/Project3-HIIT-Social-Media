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
                <td>500</td>
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
                {/* <td>{props.userData.maxPullUps}</td> */}
                <td>50</td>
              </tr>
              <tr>
                <td>Fran</td>
                {/* <td>{props.userData.fran}</td> */}
                <td>3:15</td>
              </tr>
              <tr>
                <td>Grace</td>
                <td>{props.userData.grace}</td>
              </tr>
              <tr>
                <td>Hellen</td>
                <td>{props.userData.hellen}</td>
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
                {/* <td>{props.userData.FiveK}</td> */}
                <td>25:15</td>
              </tr>
              <tr>
                <td>400m Sprint</td>
                <td>{props.userData.FourHundredMeter}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    </div>

    )
}

export default UserStats;
import React from "react";

function WodCard(props) {

    return (

        <div className="card card mb-3 mt-5" style={{width: 288}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Random Wod!</h5>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.wod}</p>
            <button type="button" className="btn btn-secondary">Generate Random Wod</button>
        </div>
      </div>
      
    )
}

export default WodCard;
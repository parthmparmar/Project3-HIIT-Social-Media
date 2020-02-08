import React from "react";

function WodCard(props) {

    return (
			<div className="card shadow">
				<img src="https://www.crossfit.com/wp-content/uploads/2020/02/29154215/Deficit-HSPU-Hobart-768x432.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Random Wod!</h5>
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.wod}</p>
					<button type="button" className="btn btn-secondary">
						Generate Random Wod
					</button>
				</div>
			</div>
		);
}

export default WodCard;
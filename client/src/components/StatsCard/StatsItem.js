import React from "react";
import "./style.css";

export default function(props) {
	return (
			<div className="stats-card__item" onClick={()=> props.click(props.item, props.statsName)}>
				<div className="row">
					<div className="col-5">
						<img src={props.statsImg} style={{ width: "100%" }} alt="" />
					</div>
					<div className="col-7" style={{ paddingLeft: 0 }}>
						<h5>{props.statsName}</h5>
						<div className="stats-value">{props.statsValue}</div>
					</div>
				</div>
			</div>
	);
}

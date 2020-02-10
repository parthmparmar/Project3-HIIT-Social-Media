import React, { Component } from "react";
import API from "../../utils/API";

class WodCard extends Component {

  state = {
    title: "",
    wod: ""
  }

  componentDidMount() {
    let wods =[{
      title: "LINE DRIVE",
      wod: "Metcon: 20-min EMOM 1.) Ski Erg/C2 Bike  2.) D-Ball OTS 3.) DB Lunge 4.) Bar Muscle-Up",
      hotel: false
    },
    {
      title: "DARK HORSE",
      wod: "Against 16-mins… 3 Rounds For Time! 40 Double Unders 30/24 Cal. Row 20 Box Jump Overs 10 HSPU ",
      hotel: false
    },
    {
      title: "SUIT & TIE",
      wod: "Death by: Take 75% of weight found above. (x)-min Time-Cap Minute 1: 4 Power Cleans + 1 DB Snatch Minute 2: 4 Power Cleans + 2 DB Snatch Each minute: clean reps stay the same, while DB Snatch reps increase by 1-rep. ",
      hotel: false
    },
    {
      title: "COAST TO COAST",
      wod: "For (4) Rounds… 3-min Work/1-min Rest (AMRAP) 7 T2B 7 Thrusters 7 Bar Facing Burpees ",
      hotel: false
    },
    {
      title: "POWER HOUR",
      wod: "Against 15-mins… For Time! 45 Deadlifts 30 Hang Cleans 15 S2OH 800m Run 15 S2OH 30 Hang Cleans 45 Deadlifts ",
      hotel: false
    },
    {
      title: "DOWN THE MIDDLE",
      wod: "Every 5 minutes for 5 rounds: 400m Run 20 American Kettlebell Swings 15 CTB Pull-ups ",
      hotel: false
    },
    {
      title: "TIP TOE",
      wod: "Against 10-mins… 3 Rounds For Time! 9/7 Cal. Bike 200m Run 8  Hang DB Snatches (Alt.) 8 Hang DB Clean and Jerks (Alt.)",
      hotel: false
    }]
    let newState = { ...this.state };
    let randomWod = wods[Math.floor(Math.random() * wods.length)]
    newState.title = randomWod.title;
    newState.wod = randomWod.wod
    this.setState(this.state = newState);
    console.log(randomWod);
    console.log(newState);
  }

  generateWod () {
    let wods =[{
      title: "LINE DRIVE",
      wod: "Metcon: 20-min EMOM 1.) Ski Erg/C2 Bike  2.) D-Ball OTS 3.) DB Lunge 4.) Bar Muscle-Up",
      hotel: false
    },
    {
      title: "DARK HORSE",
      wod: "Against 16-mins… 3 Rounds For Time! 40 Double Unders 30/24 Cal. Row 20 Box Jump Overs 10 HSPU ",
      hotel: false
    },
    {
      title: "SUIT & TIE",
      wod: "Death by: Take 75% of weight found above. (x)-min Time-Cap Minute 1: 4 Power Cleans + 1 DB Snatch Minute 2: 4 Power Cleans + 2 DB Snatch Each minute: clean reps stay the same, while DB Snatch reps increase by 1-rep. ",
      hotel: false
    },
    {
      title: "COAST TO COAST",
      wod: "For (4) Rounds… 3-min Work/1-min Rest (AMRAP) 7 T2B 7 Thrusters 7 Bar Facing Burpees ",
      hotel: false
    },
    {
      title: "POWER HOUR",
      wod: "Against 15-mins… For Time! 45 Deadlifts 30 Hang Cleans 15 S2OH 800m Run 15 S2OH 30 Hang Cleans 45 Deadlifts ",
      hotel: false
    },
    {
      title: "DOWN THE MIDDLE",
      wod: "Every 5 minutes for 5 rounds: 400m Run 20 American Kettlebell Swings 15 CTB Pull-ups ",
      hotel: false
    },
    {
      title: "TIP TOE",
      wod: "Against 10-mins… 3 Rounds For Time! 9/7 Cal. Bike 200m Run 8  Hang DB Snatches (Alt.) 8 Hang DB Clean and Jerks (Alt.)",
      hotel: false
    }]
    let newState = { ...this.state };
    let randomWod = wods[Math.floor(Math.random() * wods.length)]
    newState.title = randomWod.title;
    newState.wod = randomWod.wod
    this.setState(this.state = newState);
  }

  // loadWods() {
  //   API.findWods({})
  //   .then(res => this.setState({ wods: res }))
  //   .catch(err => console.log(err));
  //   console.log(this.state.wods)
  // }
  
  render() 
  {   
    return (
			<div className="card shadow">
				<img src="https://www.crossfit.com/wp-content/uploads/2020/02/29154215/Deficit-HSPU-Hobart-768x432.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Random Wod!</h5>
					<h5 className="card-title">{this.state.title}</h5>
          {/* <h5 className="card-title">Test</h5> */}
					<p className="card-text">{this.state.wod}</p>
          {/* <p className="card-text">Test</p> */}
          <button type="button" className="btn btn-secondary" onClick= {this.generateWod.bind(this)} >
						Generate Random Wod
					</button>
				</div>
			</div>
    );
}
}

export default WodCard;
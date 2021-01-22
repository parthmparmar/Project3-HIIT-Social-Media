import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class WodCard extends Component {

  state = {
    wods: [],
    wod: "",
    title: "",
    video: ""
  }

  componentDidMount() {
    this.loadWods();
  }

  generateWod () {
    let wods = this.state.wods
    let newState = { ...this.state };
    let randomWod = wods[Math.floor(Math.random() * wods.length)]
    newState.title = randomWod.title;
    newState.wod = randomWod.wod;
    newState.video = randomWod.video;
    this.setState({...newState});
  }

  loadWods() {
    API.findWods({}).then(res => {
      this.setState(
          {
              wods: res.data
          }
      )
      // console.log()
      // console.log(this.state.wods)
      // console.log(this.state.wods[0].title)
      // console.log(this.state.video)
       let newState = {...this.state}
      let randomWod = this.state.wods[Math.floor(Math.random() * this.state.wods.length)]
      // console.log(randomWod);
      newState.title = randomWod.title;
      newState.wod = randomWod.wod;
      newState.video = randomWod.video;
      this.setState(newState)
  });

  }
  
  render() 
  {   
    return (
			<div id="wodCard" className="card mt-3 mt-md-3 mt-lg-0">
        <h4>Workout of the Day</h4>
        <iframe width="100%" height="315" src={this.state.video} title="Random WOD of the Day"></iframe>
				<div className="card-body">
					<h5 className="card-title text-center">{this.state.title}</h5>
					<p id="wodText" className="card-text">{this.state.wod}</p>
          <button id="wodBtn" type="button" className="btn" onClick= {this.generateWod.bind(this)} >
						Generate Random Wod
					</button>
				</div>
			</div>
    );
}
}

export default WodCard;
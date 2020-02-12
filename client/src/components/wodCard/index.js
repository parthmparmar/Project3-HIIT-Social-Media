import React, { Component } from "react";
import API from "../../utils/API";

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
    this.setState(this.state = newState);
  }

  loadWods() {
    API.findWods({}).then(res => {
      this.setState(
          {
              wods: res.data
          }
      )
      console.log()
      console.log(this.state.wods)
      console.log(this.state.wods[0].title)
      console.log(this.state.video)
       let newState = {...this.state}
      let randomWod = this.state.wods[Math.floor(Math.random() * this.state.wods.length)]
      console.log(randomWod);
      newState.title = randomWod.title;
      newState.wod = randomWod.wod;
      newState.video = randomWod.video;
      this.setState(newState)
  });

  }
  
  render() 
  {   
    return (
			<div className="card shadow">
				{/* <img src="https://www.crossfit.com/wp-content/uploads/2020/02/29154215/Deficit-HSPU-Hobart-768x432.png" className="card-img-top" alt="..." /> */}
        <iframe width="100%" height="315" src={this.state.video}></iframe>
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
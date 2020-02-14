import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import Row from "../components/Row"
import MembersCard from "../components/MembersCard";
import Avatar from 'avataaars';


class Members extends Component {
	state = {
        dbMembers : [],
        clickedId : "",
        display: false
    }

    componentDidMount(){
        API.getAllMembers().then(res => {
            this.setState(
                {
                    dbMembers: res.data
                }
            )
            console.log(this.state.dbMembers)
        });
    }

    setClickedId = (index) => {
        let newState = {
            clickedId: index,
            display: true
        }
        this.setState(newState);
    }

    showName = () => {
        if (parseInt(this.state.clickedId) > -1){
            return(<h3>{this.state.dbMembers[this.state.clickedId].firstName}</h3>)
        }
    }

    render() {
        require("js-cookie").remove("location");
        require("js-cookie").set("location", "/Members");
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
        }
        
		return (
            <div className="members-page">

                <Row>
                    {this.state.dbMembers.map((userData, index) => {
                        return <MembersCard userData={userData} key={index} id={index} click={this.setClickedId}/>
                    })}
                </Row>
                
                    {this.showName()}
            </div>

        )
    }
}
export default Members;

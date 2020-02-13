import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import Row from "../components/Row"
import { set } from "mongoose";
import MembersCard from "../components/MembersCard";


class Members extends Component {
	state = {
        dbMembers : [],
        clickedId : ""
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

    render() {
        require("js-cookie").remove("location");
        require("js-cookie").set("location", "/Members");
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
            <div className="members-page">

                <Row>
                    {this.state.dbMembers.map((userData) => {
                        return <MembersCard userData={userData}/>
                    })}
                </Row>

            </div>

        )
    }
}
export default Members;

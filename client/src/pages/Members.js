import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import Row from "../components/Row"
import { set } from "mongoose";
import MembersCard from "../components/MembersCard";
import Avatar from 'avataaars'

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
                <Row>
                <Avatar
                    avatarStyle='Transparent'
                    topType='ShortHairShortWaved'
                    hairColor='Black'
                    facialHairType='BeardLight'
                    facialHairColor='Black'
                    clotheType='Hoodie'
                    clotheColor='Gray02'
                    skinColor='Brown'
                />
                </Row>

            </div>

        )
    }
}
export default Members;

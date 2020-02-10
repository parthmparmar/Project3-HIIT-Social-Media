import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import Select from "../components/Select";
import Avatar from 'avataaars'
import Wrapper from "../components/Wrapper";

const topTypeArray = ["NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart" ];
const hairColorArray = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"];
const facialHailTypeArray = ["Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum"];
const facialHairColorArray = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red" ];
const clotheColorArray = ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White" ];
const skinColorArray = ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black" ];

class UserRegister extends Component {
    
	state = {
        topType: "",
        hairColor: "",
        facialHailType:"",
        facialHairColor:"",
        clotheColor:"",
        skinColor:"",

		redirect: null
	};

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

	handleFormSubmit = event => {
		event.preventDefault();
		
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<main id="Avatar-Page">
                <Wrapper>
                    <Avatar
                        avatarStyle='Transparent'
                        topType={this.state.topType}
                        hairColor={this.hairColor}
                        facialHairType={this.facialHailType}
                        facialHairColor={this.facialHairColor}
                        clotheType='Hoodie'
                        clotheColor={this.clotheColor}
                        skinColor={this.skinColor}
                    />

                    <form className = "form-group">
                        <Select
                            id="topType-input"
                            itemName="topType"
                            optionArray = {topTypeArray}
                            change = {this.handleOnChange}
                        >
                            Hair Type
                        </Select>
                    </form>
                </Wrapper>
			</main>
		);
	}
}
export default UserRegister;



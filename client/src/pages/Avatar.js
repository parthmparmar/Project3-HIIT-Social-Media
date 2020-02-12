import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import Select from "../components/Select";
import Avatar from 'avataaars'
import Wrapper from "../components/Wrapper";

const topTypeArray = ["NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart" ];
const hairColorArray = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"];
const facialHairTypeArray = ["Blank", "BeardMedium", "BeardLight", "BeardMajestic", "MoustacheFancy", "MoustacheMagnum"];
const facialHairColorArray = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red" ];
const clotheColorArray = ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White" ];
const skinColorArray = ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black" ];

class AvatarSetup extends Component {
    
	state = {
        topType: this.props.userData.avatar.topType || "",
        hairColor: this.props.userData.avatar.hairColor || "",
        facialHairType: this.props.userData.avatar.facialHairType || "",
        facialHairColor: this.props.userData.avatar.facialHairColor || "",
        clotheColor: this.props.userData.avatar.clotheColor || "",
        skinColor: this.props.userData.avatar.skinColor || "",
		redirect: null
	};

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

	handleFormSubmit = event => {
        event.preventDefault();
        API.addAvatar({
            userId: this.props.userData._id,
            avatar: {
                topType: this.state.topType,
                hairColor: this.state.hairColor,
                facialHairType: this.state.facialHairType,
                facialHairColor: this.state.facialHairColor,
                clotheColor: this.state.clotheColor,
                skinColor: this.state.skinColor,
            }
        })
        .then(res=>{
            this.props.assignUser(res.data);
            this.setState({ redirect: "/dashboard" });
        })
        .catch(err=>{
            console.log(err);
        });
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
                        hairColor={this.state.hairColor}
                        facialHairType={this.state.facialHairType}
                        facialHairColor={this.state.facialHairColor}
                        clotheType='Hoodie'
                        clotheColor={this.state.clotheColor}
                        skinColor={this.state.skinColor}
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

                        <Select
                            id="hairColor-input"
                            itemName="hairColor"
                            optionArray = {hairColorArray}
                            change = {this.handleOnChange}
                        >
                            Hair Color
                        </Select>

                        <Select
                            id="facialHairType-input"
                            itemName="facialHairType"
                            optionArray = {facialHairTypeArray}
                            change = {this.handleOnChange}
                        >
                            Facial Hair Type
                        </Select>

                        <Select
                            id="facialHairColor-input"
                            itemName="facialHairColor"
                            optionArray = {facialHairColorArray}
                            change = {this.handleOnChange}
                        >
                            Facial Hair Color
                        </Select>

                        <Select
                            id="clotheColor-input"
                            itemName="clotheColor"
                            optionArray = {clotheColorArray}
                            change = {this.handleOnChange}
                        >
                            Clothe Color
                        </Select>

                        <Select
                            id="skinColor-input"
                            itemName="skinColor"
                            optionArray = {skinColorArray}
                            change = {this.handleOnChange}
                        >
                            Skin Color
                        </Select>
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Wrapper>
			</main>
		);
	}
}
export default AvatarSetup;



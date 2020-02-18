import React from "react";
import Avatar from 'avataaars';
import "./style.css";

function MembersCard(props) {
    return (
        <div>
            <div className="card text-white m-2 member-card shadow " id={props.id} onClick={()=>props.click(props.id)}>    
                    <Avatar
                        style={{width: "100%", height: 200}}
                        avatarStyle='Transparent'
                        topType={props.userData.avatar.topType}
                        hairColor={props.userData.avatar.hairColor}
                        facialHairType={props.userData.avatar.facialHairType}
                        facialHairColor={props.userData.avatar.facialHairColor}
                        clotheType='Hoodie'
                        clotheColor={props.userData.avatar.clotheColor}
                        skinColor={props.userData.avatar.skinColor}
                    />
                <div className="card-body text-center pt-0">
                    <h5 className="card-title">{firstLetterCap(props.userData.firstName)} {firstLetterCap(props.userData.lastName)}</h5>
                    <p className="card-text">{props.userData.box || "None"} </p>
                </div>
            </div>
        </div>
    )
}

function firstLetterCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default MembersCard;
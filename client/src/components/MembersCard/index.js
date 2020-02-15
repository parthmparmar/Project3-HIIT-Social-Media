import React from "react";
import Avatar from 'avataaars'

function MembersCard(props) {
    return (
        <div>
            <div className="card bg-dark text-white m-2 member-card" id={props.id} onClick={()=>props.click(props.id)}>    
                    <Avatar
                        avatarStyle='Transparent'
                        topType={props.userData.avatar.topType}
                        hairColor={props.userData.avatar.hairColor}
                        facialHairType={props.userData.avatar.facialHairType}
                        facialHairColor={props.userData.avatar.facialHairColor}
                        clotheType='Hoodie'
                        clotheColor={props.userData.avatar.clotheColor}
                        skinColor={props.userData.avatar.skinColor}
                    />
                <div className="card-body text-center">
                    <h5 className="card-title">{firstLetterCap(props.userData.firstName)} {firstLetterCap(props.userData.lastName)}</h5>
                    <p className="card-text">{props.userData.box}</p>
                    {/* <button type="button" className="btn btn-primary" onClick={()=>props.click(props.id)}> + </button> */}
                </div>
            </div>
        </div>
    )
}

function firstLetterCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default MembersCard;
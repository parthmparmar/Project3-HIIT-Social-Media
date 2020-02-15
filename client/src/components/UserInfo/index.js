import React, {useState, useRef} from "react";
import TextInput from "../TextInput";
import API from "../../utils/API";
import Avatar from 'avataaars';

function UserInfo(props) {
    const [status, setStatus] = useState("");
    const [statusEdit, setStatusEdit] = useState(false);

    const statusInput = useRef("");

    function convertHeight(heightInches){
        var feet = Math.floor(heightInches / 12);
        var leftover = heightInches % 12;
        return (feet + "' " + leftover + "\"")
    }

    function clickStatusUpdate(){
        setStatusEdit(false)
        if(statusInput.current.value) {
            let filteredDataArray = [
                {status: statusInput.current.value.trim()}
            ]; 
            if (filteredDataArray) {
                API.updateStats({
                    userId: props.userData._id,
                    filteredDataArray
                })
                    .then(res => {
                        console.log(res.data);
                        props.assignUser(res.data);
                    })
                    .catch(err => console.log(err));
                }
            else {
                console.log("New status not added")
            }
        }
    }

    function clickCancelStatusUpdate(){
        setStatusEdit(false);
    }

    return (
        <div>
            <div id="user-info-card" className="card shadow mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <Avatar
                             style={{width: "100%"}}
                             avatarStyle='Transparent'
                             topType={props.userData.avatar.topType || ""}
                             hairColor={props.userData.avatar.hairColor || ""}
                             facialHairType={props.userData.avatar.facialHairType || ""}
                             facialHairColor={props.userData.avatar.facialHairColor || ""}
                             clotheType='Hoodie'
                             clotheColor={props.userData.avatar.clotheColor || ""}
                             skinColor={props.userData.avatar.skinColor || ""} 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{firstLetterCap(props.userData.firstName)} {firstLetterCap(props.userData.lastName)}</h5>
                            <p className="card-text">{props.userData.status.status ? props.userData.status.status : "No Status"}</p>
                            {props.edit ? statusEdit || <button className="btn btn-primary" onClick={()=>setStatusEdit(true)}>Update</button> : null}
                            {statusEdit &&
                                <TextInput
                                    id="status-input"
                                    name="status"
                                    click={() => clickStatusUpdate()}
                                    clickCancel={() => clickCancelStatusUpdate()}
                                    refInput={statusInput}
                                >   
                                    New Status
                                </TextInput>
                            }
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Division: {props.userData.gender ? firstLetterCap(props.userData.gender): "NaN"}</li>
                <li className="list-group-item">Age: {props.userData.birthday ? props.userData.age : "NaN"}</li>
                <li className="list-group-item">Height: {props.userData.height.height ? convertHeight(props.userData.height.height): "NaN"}</li>
                <li className="list-group-item">Weight: {props.userData.weight.weight || "NaN"} LB</li>
                <li className="list-group-item">Box: {props.userData.box || "NaN"}</li>
            </ul>
            </div>
        </div>

    )
}

function firstLetterCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}



export default UserInfo;
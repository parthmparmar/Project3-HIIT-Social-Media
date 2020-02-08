import React, {useState, useRef} from "react";
import TextInput from "../TextInput";
import API from "../../utils/API";

function UserInfo(props) {
    const [status, setStatus] = useState("");
    const [statusEdit, setStatusEdit] = useState(false);

    const statusInput = useRef("");

    function clickStatusUpdate(){
        setStatusEdit(false)
        let filteredDataArray = [
            {status: statusInput.current.value}
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

    return (
        <div>
            <div id="user-info-card" className="card shadow mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="/assets/avatar/avataaars.png" className="card-img" alt="avatar" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{firstLetterCap(props.userData.firstName)} {firstLetterCap(props.userData.lastName)}</h5>
                            <p className="card-text">{props.userData.status.status ? props.userData.status.status : "No Status"}</p>
                            {statusEdit || <button className="btn btn-primary" onClick={()=>setStatusEdit(true)}>Edit</button>}
                            {statusEdit &&
                                <TextInput
                                    id="status-input"
                                    name="status"
                                    click={() => clickStatusUpdate()}
                                    refInput={statusInput}
                                >   
                                    New Status
                                </TextInput>
                            }
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Division: {firstLetterCap(props.userData.gender)}</li>
                <li className="list-group-item">Age: {props.userData.age}</li>
                <li className="list-group-item">Height: {props.userData.height.height}</li>
                <li className="list-group-item">Weight: {props.userData.weight.weight} LB</li>
                <li className="list-group-item">Box: {props.userData.box}</li>
            </ul>
            </div>
        </div>

    )
}

function firstLetterCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}




export default UserInfo;
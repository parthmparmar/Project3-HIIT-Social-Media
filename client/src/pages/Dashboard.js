import React from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import MembersCard from "../components/MembersCard";
import UserInfo from "../components/UserInfo";

function Dashboard(props) {
		return (
      <Wrapper>
        <Row>
          <UserInfo userData= {props.userData}/>
          <MembersCard />
        </Row>
      </Wrapper>
		);
}

export default Dashboard;

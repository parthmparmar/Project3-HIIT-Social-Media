import React from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
// import MembersCard from "../components/MembersCard";
import UserInfo from "../components/UserInfo";
import WodCard from "../components/wodCard";
import UserStatsCard from "../components/StatsCard";
import Col from "../components/Col";

function Dashboard(props) {
		return (
      <Wrapper>
        <Row>
          <Col size="12 lg-7">
            <Row>
              <Col size="12">
                <UserInfo userData= {props.userData} assignUser = {props.assignUser}/>
              </Col>
              <Col size="12">
                <UserStatsCard userData= {props.userData}/>
              </Col>
            </Row>
          </Col>
          <Col size="12 lg-5">
            <WodCard WodData= {props.wodData} />
          </Col>
        </Row>
      </Wrapper>
		);
}

export default Dashboard;

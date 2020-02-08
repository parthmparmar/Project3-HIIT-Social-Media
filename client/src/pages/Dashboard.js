import React from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import MembersCard from "../components/MembersCard";
import UserInfo from "../components/UserInfo";
import WodCard from "../components/wodCard";
import UserStats from "../components/StatsCard";
import Col from "../components/Col";

function Dashboard(props) {
		return (
      <Wrapper>
        <Row>
          <Col size="md-6 sm-12"  >
          <UserInfo  userData= {props.userData}/>
          {/* <MembersCard /> */}
          </Col >
          <Col size="md-6 sm-12">
          <WodCard  userData= {props.userData} />
          </Col>
        </Row>
        <Row>
        <UserStats userData= {props.userData}/>
        </Row>
      </Wrapper>
		);
}

export default Dashboard;

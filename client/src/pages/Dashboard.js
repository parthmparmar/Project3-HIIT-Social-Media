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
          <Col size="12 lg-7">
            <Row>
              <Col size="12">
                <UserInfo userData= {props.userData}/>
              </Col>
              <Col size="12">
                <MembersCard />
              </Col>
              <Col size="12">
                <UserStats userData= {props.userData}/>
              </Col>
            </Row>
          </Col>
          <Col size="12 lg-5">
            <WodCard />
          </Col>
        </Row>
      </Wrapper>
		);
}

export default Dashboard;

import React, { useContext } from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import UserInfo from "../components/UserInfo";
import WodCard from "../components/wodCard";
import UserStatsCard from "../components/StatsCard";
import Col from "../components/Col";
import { UserContext } from "../App";


const label = ["Jan", "Feb", "March"];
const data = [86, 67, 91];

function Dashboard() {
	// Create State from App component UserContext
	// eslint-disable-next-line
	const { userInfo, userAuth } = useContext(UserContext);
	const [userData, setUserData] = userInfo;
	require("js-cookie").remove("location");
	require("js-cookie").set("location", "/dashboard");

	return (
		<Wrapper>
			<Row>
				<Col size="12 lg-7">
					<Row>
						<Col size="12">
							<UserInfo userData={userData} assignUser={setUserData} edit={true} />
						</Col>
						<Col size="12">
							<UserStatsCard userData={userData} />
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

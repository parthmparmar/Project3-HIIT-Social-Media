import React from 'react';
import NavBar from "./components/NavBar"
import './App.css';
import UserInfo from './components/UserInfo';
import Wrapper from './components/Wrapper';
import Row from './components/Row';
import MembersCard from './components/MembersCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Wrapper>
        <UserInfo/>
        <Row>
          <MembersCard/>
        </Row>
      </Wrapper>
    </div>
  );
}

export default App;

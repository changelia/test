import React, { Component } from 'react';
import styled from 'styled-components'

import LeaderboardHeader from './LeaderboardHeader'
import Table from './table/table'

const Div = styled.div`
	position: relative;
	width: 100%;
	border-radius: 4px;
  z-index: 20;
	height: auto;
	height: 500px;
  margin-right: 0px;
  margin-bottom: 30px;
	padding-bottom: 30px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .14), inset 0 -1px 0 0 #ddd;
`
const BottomGradient = styled.div`
	position: absolute;
  bottom: 0;
  z-index: 9999;
  left:0;
  width: 100%;
  height: 120px;
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff 80%);
`

class Leaderboard extends Component {
  render() {
    return (
      <Div>
        <LeaderboardHeader />
        <Table />
        <BottomGradient />
      </Div>
    );
  }
}

export default Leaderboard;

import React, { Component } from 'react';
import styled from 'styled-components'

import Table from '../dashboard/components/Leaderboard/Leaderboard'
import BlueContainer from '../container'

const Section = styled.section`
  z-index: 20;
  display: flex;
  padding: 30px 60px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  font-size: 14px;
`

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <BlueContainer />
        <Section>
          <Table />
        </Section>
      </div>
    );
  }
}

export default Leaderboard;

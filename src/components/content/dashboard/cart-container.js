import React, { Component } from 'react';
import styled from 'styled-components'

import Notification from './components/notification/notification'
import CardEmail from './components/emails/card-emails'
import Data from './components/data/Data'
import Leaderboard from './components/Leaderboard/Leaderboard'
import User from './components/user/user'

const Section = styled.section`
  position: relative;
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

class CartContainer extends Component {
  render() {
    return (
      <Section>
        <Notification />
        <CardEmail />
        <Data />
        <Leaderboard />
        <User />
        <User />
        <User />
      </Section>
    );
  }
}

export default CartContainer;

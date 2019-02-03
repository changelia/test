import React, { Component } from 'react';
import styled from 'styled-components'

import BlueContainer from '../container'
import CartContainer from './cart-container'
import SearchInput from './components/search/search'

const Section = styled.section``


class Dashboard extends Component {
  render() {
    return (
      <Section>
        <BlueContainer>
          <SearchInput />
        </BlueContainer>
        <CartContainer />
      </Section>
    )
  }
}

export default Dashboard;

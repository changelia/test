import React from 'react'
import styled from 'styled-components'
import Block from './block'
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

const Analytics = () => {
  return (
    <div>
      <BlueContainer />
      <Section>
        <Block width={54} />
        <Block width={44} />
        <Block width={32} />
        <Block width={32} />
        <Block width={32} />
      </Section>
    </div>
  )
}

export default Analytics
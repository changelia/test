import React, { Component } from 'react';
import styled from 'styled-components'

import Emails from './emails'
import CardHeader from './card-header'

const Div = styled.div`
	position: relative;
  z-index: 20;
  width: 54%;
  height: 460px;
  margin-right: 10px;
  margin-bottom: 30px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, .14), inset 0 -1px 0 0 #ddd;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
	background-color: #fff;
`
const BottomGradient = styled.div`
	position: absolute;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 120px;
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff 80%);
`


class CardEmail extends Component {
  render() {
    return (
      <Div>
        <CardHeader />
        <Emails />
        <BottomGradient />
      </Div>
    );
  }
}

export default CardEmail;

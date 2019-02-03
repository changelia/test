import React, { Component } from 'react';
import styled from 'styled-components'

import DateHeader from "./dataHeader";
import Percentage from './percentage'
import Soc from './soc'

const Div = styled.div`
	position: relative;
  z-index: 20;
  width: 44%;
  height: 460px;
  margin-bottom: 30px;
  margin-left: 10px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, .14), inset 0 -1px 0 0 #ddd;
	display: flex;
	flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
`

class Emails extends Component {
  render() {
    return (
      <Div>
        <DateHeader />
        <Percentage />
        <Soc />
      </Div>
    );
  }
}

export default Emails;

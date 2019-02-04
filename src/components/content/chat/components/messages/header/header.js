import React, { Component } from 'react'
import styled from 'styled-components'

import Buttons from './buttons'

const Div = styled.div`
	height: 50px;
	padding: 20px 20px;
	display: flex;
`
const Sort = styled.div`
	width: 40%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
`
const DropdownBtn = styled.div`
	width: 80px;
	display: flex;
	align-items: center;
	margin-right: 10px;
	cursor: pointer;
	user-select: none;
`
const Span = styled.span`
	font-size: 15px;
	text-align: center;
	display: flex; align-items: center;
	:nth-child(2){
		margin-left: 7px;
		font-size: 18px;
	}

`
const Box = styled.div`
	width: 60%;
	display: flex;
	align-content: center;
`

const ToggleMenu = styled.div`
	bottom: -110px;
	padding: 10px;
	cursor: pointer;
	z-index: 99;
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	position: absolute;
	visibility: ${toggle => toggle.toggle ? 'visible' : 'hidden'};
	box-shadow: 0 1px 14px 0 rgba(0,0,0,.2);
	background: #fff;
`
const ToggleMenuBtn = styled.a`
	padding: 10px 30px;
	margin: 3px 0;
	color: #000;
	font-size: 15px;
	text-decoration: none;
	:hover{
		background:#f5f5f5;
	}
`

class MessageHedaer extends Component {
  state = {
    toggle: false
  }

  toggleMenu = () => {
    this.setState({
      toggle: !this.state.toggle
    })
    console.log(this.state.toggle);

  }

  render() {
    return (
      <Div>
        <Sort>
          <DropdownBtn onClick={this.toggleMenu}>
            <Span>Sort By</Span>
            <Span><i className="fas fa-angle-down"></i></Span>
          </DropdownBtn>
          <ToggleMenu toggle={this.state.toggle}>
            <ToggleMenuBtn href="#">nav likn 1</ToggleMenuBtn>
            <ToggleMenuBtn href="#">nav likn 2</ToggleMenuBtn>
          </ToggleMenu>
        </Sort>
        <Box>
          <Buttons />
        </Box>
      </Div>
    )
  }
}

export default MessageHedaer
import React, { Component } from 'react'
import styled from 'styled-components'

import DropDownLinks from './dropDownLinks'

const Container = styled.div`
	cursor: pointer;
	position: relative;
	z-index: 99999;
	user-select: none;
`
const Span = styled.span`
	margin-right: 14px;
	transition: color 200ms ease;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  @media(max-width: 768px){
    display: none;
  }
`
const Div = styled.div`
	display: flex;
	align-items: center;
`

const Image = styled.img`
	width: 40px;
	border-radius: 50%;
`
const ToggleNavigation = styled.div`
	position: absolute;
	width: 210px;
	transform: translate(-15px,10px);
	box-shadow: 0 1px 14px 0 rgba(0, 0, 0, .2);
`


class Profile extends Component {
  state = {
    toggle: false
  }

  toggleMenu = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <Container>
        <Div onClick={this.toggleMenu}>
          <Span>Welcome Nasser</Span>
          <Image src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg" />
        </Div>
        <ToggleNavigation>
          <DropDownLinks toggle={this.state.toggle} />
        </ToggleNavigation>
      </Container>
    )
  }
}

export default Profile
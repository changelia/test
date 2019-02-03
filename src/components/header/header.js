import React from 'react'
import styled from 'styled-components'

import Logotype from './logotype'
import Profile from './profile'
import Navigation from './navigation/navigation'

const HeaderStyled = styled.header`
	width: 100%;
	height: 128px;
	background-image: linear-gradient(90deg, #172333, #334962);
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 99;
`
const Contaner = styled.section`
	padding-right: 60px;
	padding-left: 60px;
	color: #fff;
	height:64px;
	z-index: 2;
	display: flex;
	:nth-child(1){
		justify-content: space-between;
		align-items: center;
		height: 62px;
		z-index: 2;
		.logotype{
			display: flex;
			align-items: center;
			text-decoration: none;
		}
	}
	:nth-child(2){
		height: 66px;
		justify-content: center;
		z-index: 1;
	}
	`
const Div = styled.div`
	position: absolute;
	width: 400px;
	right: 0;
	overflow: hidden;
	height: 128px;
	z-index:0;
`
const Svg = styled.img`
	position: absolute;
	opacity: .2;
	width: 420px;
	transform: translate(-23px, 17px);
`

const Header = () => {
  return (
    <HeaderStyled>
      <Contaner>
        <Logotype />
        <Profile />
      </Contaner>
      <Contaner>
        <Navigation />
      </Contaner>
      <Div>
        <Svg src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c19f681f264d645e04b0f9a_network-hero-img-login.svg" />
      </Div>
    </HeaderStyled>
  )
}

export default Header
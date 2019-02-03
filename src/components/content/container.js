import React from "react";
import styled from 'styled-components'


const Div = styled.div`
	width: 100%;
	height: 90px;
	padding-bottom: 1px;
	background-color: #30aabc;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;

`
const Image = styled.img`
	position: absolute;
  right: -7px;
	opacity: 0.2;
	width: 490px;
	z-index: 1;
`
const Content = styled.div`
	z-index:2;
`

const BlueContainer = (props) => {
  return (
    <Div>
      <Content>
        {props.children}
      </Content>
      <Image src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c19f681f264d645e04b0f9a_network-hero-img-login.svg" />
    </Div>
  )
}

export default BlueContainer
import React, { Component } from 'react';
import styled from 'styled-components'

import Tabs from './tabs'


const Div = styled.div`
	width: 14%;
	position: relative;
	padding: 20px 0 20px 20px;
`
const NewEmailBnt = styled.a`
	position: absolute;
	top: 30px;
	width: 85%;
	height: 40px;
	border-radius: 300px;
	background-color: #ff503a;
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	display: flex;
	justify-content:center;
	align-items:center;
	text-decoration:none;
	
`

class TabBlock extends Component {
	render() {
		return (
			<Div>
				<NewEmailBnt href="#">New Email</NewEmailBnt>
				<Tabs />
			</Div>
		);
	}
}

export default TabBlock;

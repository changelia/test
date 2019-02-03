import React, { Component } from 'react';
import styled from 'styled-components'
import BlueContainer from '../container'

import TabBlock from './components/tabBlock'
import SmsBlock from './components/smsblock'

const Section = styled.section`
`
const Div = styled.div`
	display: flex;
	padding: 30px 60px;
	box-sizing: border-box;
`
const Container = styled.div`
	width: 100%;
	background: #fff;
	display: flex;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .14), inset 0 -1px 0 0 #ddd;
`

class Chat extends Component {
	render() {
		return (
			<Section>
				<BlueContainer />
				<Div>
					<Container>
						<TabBlock />
						<SmsBlock />
					</Container>
				</Div>
			</Section>
		);
	}
}

export default Chat;

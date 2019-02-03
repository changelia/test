import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
	width: 100%;
	height: 50px;
	background-color: #ffdf85;
	margin-bottom: 30px;
	display:flex;
	justify-content:center;
	align-items:center;
	position: relative;
`
const Paragraph = styled.p`
	color: #444;
  font-size: 14px;
  font-weight: 500;
`
const NotificationCloseBtn = styled.div`
	position: absolute;
	right: 14px;
  width: 20px;
  height: 20px;
	opacity: 0.2;
	cursor: pointer;
`
const Image = styled.img`
	width: 21px;
`

const Notification = ()=>{
	return(
		<Div>
			<Paragraph>
				Notification message - Neque porro quisquam est qui dolorem ipsum quia dolor amet...
			</Paragraph>
			<NotificationCloseBtn>
				<Image src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e574e9b80db_close-btn.svg" />
			</NotificationCloseBtn>
		</Div>
	)
}

export default Notification;

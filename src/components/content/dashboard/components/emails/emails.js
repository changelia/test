import React, { Component } from 'react';
import styled from 'styled-components'

const Div = styled.div`
	padding: 0px 20px 20px;
	overflow-y: scroll;
  display: flex;
  flex-direction: column;
`
const EmailLink = styled.a`
	text-decoration: none;
	color:#333;
	:hover{
		opacity: .6;
	}
`
const EmailRow = styled.div`
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #e0e0e0;
	display: flex;
	position: relative;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
`
const EmailName = styled.div`
	width: 30%;
	font-size: 14px;
	font-weight: 500;
`
const EmailSubject = styled.div`
	font-size: 14px;
	font-weight: 500;
`
const EmailData = styled.div`
	position: absolute;
	right: 0;
	font-size: 14px;
	font-weight: 500;
`



const messages = [
	{
		name: 'Benjamin1 Anthonisqwz',
		subject: 'RE: Su1bject line: Unread message state',
		data: '11:23 AM1',
	},
	{
		name: 'Benjamin 2Anthonisz',
		subject: 'RE: Sub2ject line: Unread message state',
		data: '12:23 AM2',
	},
	{
		name: 'Benjamin 3Anthonisz',
		subject: 'RE: Sub3ject line: Unread message state',
		data: '8:23 AM3',
	},

]

class Emails extends Component {
	render() {
		return (
			<Div>
				{
					messages.map((message, index) => {
						return (
							<EmailLink key={index}>
								<EmailRow>
									<EmailName>{message.name}</EmailName>
									<EmailSubject>{message.subject}</EmailSubject>
									<EmailData>{message.data}</EmailData>
								</EmailRow>
							</EmailLink>
						)
					})
				}
			</Div>
		)
	}
}

export default Emails
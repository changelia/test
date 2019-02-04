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
  position: relative;
	:hover{
		opacity: .6;
	}
  ::after{
    position: absolute;
    content:'';
    left:3px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${color=>(color.active? '#30aabc': 'transparent')};
  }
`
const EmailRow = styled.div`
  padding: 1px 20px;
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
    active: true
  },
  {
    name: 'Benjamin 2Anthonisz',
    subject: 'RE: Sub2ject line: Unread message state',
    data: '12:23 AM2',
    active: true
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: true
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },
  {
    name: 'Benjamin 3Anthonisz',
    subject: 'RE: Sub3ject line: Unread message state',
    data: '8:23 AM3',
    active: false
  },

]

class Emails extends Component {
  render() {
    return (
      <Div>
        {
          messages.map((message, i) => {
            return (
              <EmailLink key={i} active={message.active}>
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
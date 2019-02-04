import React from 'react'
import styled from 'styled-components'
import { Route, Redirect } from "react-router-dom";

import MessageHedaer from '../header/header'
import Tabs from './tabs'
import Msg from './msg'

const Div = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
`
const Message = styled.div`
	width: 40%;
	height: 100vh;
	overflow: auto;
`
const Ul = styled.ul`
	margin: 0;
	padding: 0 0 0 10px;
	display: flex;
	flex-direction: column;

`
const Messages = styled.div`
	display: flex;
`
const MessageContent = styled.div`
	width: 60%;
`

const inboxMessages = [
  {
    id: 1,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Benjamin Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant  design Please find attached my most up-to-date CV for the vacant Interaction design ',
    subject: 'Subject Line',
    data: '17.11.12',
    seen: false
  },
  {
    id: 2,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Benjamin ',
    mesaage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
    subject: 'Subject Line',
    data: '17.11.13',
    seen: false
  },
  {
    id: 3,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
    subject: 'Subject Line',
    data: '17.11.14',
    seen: true
  },
  {
    id: 4,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.13.',
    seen: true
  },
  {
    id: 5,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.11',
    seen: true
  },
  {
    id: 6,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.11',
    seen: true
  },
  {
    id: 7,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.11',
    seen: true
  },
  {
    id: 8,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.11',
    seen: true
  },
  {
    id: 9,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.11',
    seen: true
  },
  {
    id: 10,
    img: 'https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d989b8100_nasser.jpg',
    name: 'Anthonisz',
    mesaage: 'Please find attached my most up-to-date CV for the vacant Interaction design',
    subject: 'Subject Line',
    data: '17.11.11',
    seen: true
  },
]




const Inbox = () => {
  return (
    <Div>
      <MessageHedaer />
      <Messages>
        <Message>
          <Ul>
            {
              inboxMessages.map((message, i) => {
                return (
                  <Tabs
                    key={i}
                    name={message.name}
                    subject={message.subject}
                    mesaage={message.mesaage.slice(0, 40)}
                    data={message.data}
                    id={i + 1}
                  />
                )
              })
            }
          </Ul>
        </Message>
        <MessageContent>
          <Route path="/chat/:list/:id" render={() => (
            <Msg object={inboxMessages} />
          )} />
          <Route exact path="/chat/inbox/" render={() => (<Redirect to="/chat/inbox/1" />)} />
        </MessageContent>
      </Messages>
    </Div>
  )
}

export default Inbox
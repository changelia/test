import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import styled from 'styled-components'

import Inbox from './messages/inbox/inbox'


const Div = styled.div`
	width: 86%;
`

class SmsBlock extends Component {
  render() {
    return (
      <Div>
        <Route path="/chat/:list" component={Inbox} />
        <Route exact path="/chat" render={() => (<Redirect to="/chat/inbox" />)} />
      </Div>
    );
  }
}

export default SmsBlock;

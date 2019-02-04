import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Navigation = styled.nav`
	display: flex;
	flex-direction: column;	
	a{
		width: 100%;
		padding: 15px 0px;
		margin: 1px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
	}
`
const Links = styled.a`
`

const Div = styled.div`
	margin-top: 70px;
`
const Icon = styled.div`
	font-size: 30px;
	padding-left: 10px;
	color: #C8C8C8;
	display: flex;
	align-items: center;
`
const LinkName = styled.span`
	font-size: 16px;
	margin-left: 10px;
	color: #000;

`
const Amount = styled.span`
	font-size: 16px;
	font-weight: 400;
	color: #000;
	margin-right: 10px;
`


class Tabs extends Component {
  render() {
    return (
      <Div>
        <Navigation>
          <NavLink to="/chat/inbox" activeClassName="tabActive">
            <Icon>
              <i className="fas fa-inbox"></i>
              <LinkName>Inbox</LinkName>
            </Icon>
            <Amount>1</Amount>
          </NavLink>
          <NavLink to="/chat/sent" activeClassName="tabActive">
            <Icon>
              <i className="far fa-envelope"></i>
              <LinkName>Sent</LinkName>
            </Icon>
            <Amount></Amount>
          </NavLink>
          <Links href="#">
            <Icon>
              <i className="far fa-file"></i>
              <LinkName>Draft</LinkName>
            </Icon>
            <Amount></Amount>
          </Links>
          <Links href="#">
            <Icon>
              <i className="far fa-trash-alt"></i>
              <LinkName>Trash</LinkName>
            </Icon>
            <Amount></Amount>
          </Links>
        </Navigation>
      </Div>
    );
  }
}

export default Tabs;

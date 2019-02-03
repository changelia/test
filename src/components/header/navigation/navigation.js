import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from 'styled-components'

const Nav = styled.nav``
const Ul = styled.ul`
	display: flex;
	margin: 0;
`
const Li = styled.li`
	list-style: none;
	width: 200px;
	height: 64px;
	a{
		position: relative;
		display: flex;
	 	flex-direction: column;
	 	align-items: center;
	 	width: 100%;
	 	height: 100%;
	 	color: ${color => color.active ? '#30aabc' : 'white'};
		text-decoration: none;
		::after{
			content: '';
			position: absolute;
			bottom: -2px;
			width: 0px;
			height: 0px;
			border-style: none solid solid;
			border-width: 0px 8px 10px;
			border-color: #000 transparent ${color => color.active ? '#30aabc' : 'transparent'};
			background-color: transparent;
		}
	}
`
const Border = styled.div`
	position: absolute;
	right: -2px;
	bottom: 16px;
	width: 1px;
	height: 50px;
	border-radius: 200px;
	background-color: #30aabc;
	opacity: 0.6;
`
const Div = styled.div`
	font-size: 30px;
	font-weight: 300;
`
const Span = styled.span`

`

const links = [
  { path: '/dashboard', title: "Dashboard", icon: 'far fa-address-card' },
  { path: '/chat', title: "Chat", icon: 'far fa-envelope' },
  { path: '/leaderboard', title: "Leaderboard", icon: 'fas fa-list-ol' },
  { path: '/analytics', title: "Analytics", icon: 'fas fa-chart-line' },
]

const Navigation = ({ location }) => {
  return (
    <Nav>
      <Ul>
        {links.map(link => (
          <Li active={location.pathname === link.path} key={link.path}>
            <Link to={link.path} >
              <Div>
                <i className={link.icon}></i>
              </Div>
              <Span>{link.title}</Span>
              <Border />
            </Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default withRouter(Navigation)
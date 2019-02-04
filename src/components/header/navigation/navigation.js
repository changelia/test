import React from 'react'
import { NavLink } from "react-router-dom";
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
	@media(max-width:1200px){
    width: 170px;
  }
	@media(max-width: 992px){
    width: 150px;
  }
	a{
		position: relative;
		display: flex;
	 	flex-direction: column;
	 	align-items: center;
	 	width: 100%;
	 	height: 100%;
	 	color: white;
		text-decoration: none;
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
const Span = styled.span``

const links = [
  { path: '/dashboard', title: "Dashboard", icon: 'far fa-address-card' },
  { path: '/chat', title: "Chat", icon: 'far fa-envelope' },
  { path: '/leaderboard', title: "Leaderboard", icon: 'fas fa-list-ol' },
  { path: '/analytics', title: "Analytics", icon: 'fas fa-chart-line' },
]

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        {links.map(link => (
          <Li key={link.path}>
            <NavLink to={link.path} >
              <Div>
                <i className={link.icon}></i>
              </Div>
              <Span>{link.title}</Span>
              <Border />
            </NavLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default Navigation
import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Li = styled.li`
	width: 100%;
	list-style: none;
	a{
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #ddd;
		padding: 20px;
		text-decoration: none;
		position: relative;
	}
`
const Span = styled.span`
	:nth-child(1){
		width: 80%;
		margin-bottom: 6px;
		font-size: 15px;
		font-weight: 600;
		color: #000;
	}
	:nth-child(2){
		width: 100%;
		margin-bottom: 6px;
		color: #000;
		font-size: 14px;
	}
	:nth-child(3){
		width: 90%;
		color: #666;
	}
	:nth-child(4){
		position: absolute;
		right: 20px;
		top:20px;
		font-size: 14px;
		color: #000;
	}

`

const Tabs = ({ name, subject, mesaage, data, id, }) => {
  return (
    <Li>
      <NavLink to={`/chat/inbox/${id}`} activeClassName="messege">
        <Span>{name}</Span>
        <Span>{subject}</Span>
        <Span>{mesaage}...</Span>
        <Span>{data}</Span>
      </NavLink>
    </Li>
  )
}

export default Tabs
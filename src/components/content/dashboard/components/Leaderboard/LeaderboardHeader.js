import React from 'react';
import styled from 'styled-components'

const Div = styled.div``
const CardIconName = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 60px;
	padding: 0 30px;
	border-bottom: 1px solid #e0e0e0;
`
const Span = styled.span`
  color: #333;
	font-size: 20px;
	margin-left: 10px;
  line-height: 20px;
  font-weight: 600;
`
const Icon = styled.div`
	color: #333;
  font-size: 34px;
  line-height: 40px;
`
const CardLink = styled.div`
	position: absolute;
	right: 30px;
`
const Link = styled.a`
  color: #30aabc;
  font-size: 15px;
  font-weight: 500;
	text-decoration: none;
	:hover{
		text-decoration: underline;
	}
`

const LeaderboardHeader = () => {
  return (
    <Div>
      <CardIconName>
        <Icon>
          <i className="far fa-envelope"></i>
        </Icon>
        <Span>Leaderboard</Span>
        <CardLink>
          <Link href="#">Visit Leaderboard</Link>
        </CardLink>
      </CardIconName>
    </Div>
  )
}

export default LeaderboardHeader;

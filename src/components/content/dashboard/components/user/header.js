import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
	padding: 5px 20px 0;
`
const CardIconName = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 60px;
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
	right: 0;
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

const UserHeader = () => {
  return (
    <Div>
      <CardIconName>
        <Icon>
          <i className="fas fa-chart-line"></i>
        </Icon>
        <Span>Users connected</Span>
        <CardLink>
          <Link href="#">Visit Analytics</Link>
        </CardLink>
      </CardIconName>
    </Div>
  )
}

export default UserHeader;

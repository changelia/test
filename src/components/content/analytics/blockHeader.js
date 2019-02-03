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

const Blockheader = () => {
  return (
    <Div>
      <CardIconName>
        <Icon>
          <i className="fas fa-chart-line"></i>
        </Icon>
        <Span>Users connected</Span>
      </CardIconName>
    </Div>
  )
}

export default Blockheader;

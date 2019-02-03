import React from "react";
import styled from 'styled-components'

import AmountUsers from './amountUsers'


const Container = styled.div`
	display: flex;
	padding: 5px 20px 20px;
`
const Div = styled.div`
	width: 50%;
	display: flex;
	:nth-child(1){
		width: 50%;
		height: 290px;
		flex-direction: column;
		justify-content: center;
		align-items:center;
		background-position: 50% 50%;
		background-size: 220px;
		background-repeat: no-repeat;
		background-image: url("https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c37aaa99fb97be0092be792_34%20Users%20Pie%20Graph.png");
	}
`
const Amount = styled.h3`
	margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: 600;
`
const Span = styled.span`
	color: #333;
  font-size: 18px;
  font-weight: 500;
`


const Percentage = () => {
  return (
    <Container>
      <Div>
        <Amount>26</Amount>
        <Span>Users</Span>
      </Div>
      <Div>
        <AmountUsers />
      </Div>
    </Container>
  )
}

export default Percentage
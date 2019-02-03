import React from "react";
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  padding-top: 0px;
  padding-left: 20px;
  flex-direction: column;
  justify-content: center;
`
const Percentage = styled.div`
	display: flex;
	align-items: center;
  margin-bottom: 20px;
  border-left: 15px solid #8ccc88;
	height: 15px;
	:nth-child(2){
		border-left: 15px solid #5978a1;
	}
	:nth-child(3){
		border-left: 15px solid #e17d70;
	}
`
const Number = styled.span`
	margin-right: 10px;
	margin-left: 10px;
	font-size: 18px;
	font-weight: 600;
	color: #8ccc88;
	:nth-child(2){
		color: #5978a1;
	}
	:nth-child(3){
		color: #e17d70;
	}
`
const Person = styled.span`
	color: #333;
  font-size: 18px;
  font-weight: 500;
`
const Block = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
`
const Span = styled.span`
	margin-right: 10px;
  color: #333;
  font-size: 44px;
  font-weight: 600;
`
const Text = styled.p`
	color: #333;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
	width: 150px;
`

const AmountUsers = () => {
  return (
    <Div>
      <Percentage>
        <Number>67.9%</Number>
        <Person>Employees</Person>
      </Percentage>
      <Percentage>
        <Number>25%</Number>
        <Person>Recruiter</Person>
      </Percentage>
      <Percentage>
        <Number>7.1%</Number>
        <Person>Admin</Person>
      </Percentage>
      <Block>
        <Span>15</Span>
        <Text>
          Users with at least
					1 network connected
				</Text>
      </Block>
    </Div>
  )
}

export default AmountUsers
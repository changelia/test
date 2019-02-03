import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
	padding: 5px 20px 20px;
`
const CardIconName = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 80px;
	border-top: 1px solid #e0e0e0;
	.greyed-out{
		opacity: .4;
	}
`
const Item = styled.div`
    display: flex;
    width: 19%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px none #000;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    font-weight: 500;
`
const Span = styled.div`
		color: #333;
		font-weight: 600;
	:nth-child(1){
		margin-bottom: 10px;
		font-size: 24px;
	}
	:nth-child(2){
		font-size: 16px;
	}
`


let items = [
  { name: "Gmail", amount: '12', Class: '' },
  { name: "Linkedin", amount: '13', Class: '' },
  { name: "Facebook", amount: '3', Class: '' },
  { name: "Twitter", amount: '15', Class: '' },
  { name: "Linkedin", amount: '0', Class: 'greyed-out' },
  { name: "Dribbble", amount: '0', Class: 'greyed-out' }
]

const Soc = () => {
  return (
    <Div>
      <CardIconName>
        {
          items.map((item, index) => {
            return (
              <Item key={index} className={item.Class}>
                <Span>{item.amount}</Span>
                <Span>{item.name}</Span>
              </Item>
            )
          })
        }
      </CardIconName>
    </Div>
  )
}

export default Soc;

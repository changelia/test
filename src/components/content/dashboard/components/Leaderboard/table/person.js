import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
	display: flex;
	width: auto;
  height: 60px;
  justify-content: flex-start;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
`
const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 60px;
  background-color: #ff503a;
	font-weight: 500;
	color: #fff;
  font-size: 16px;
`
const Block = styled.div`
	width:235px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
`
const ProfileImg = styled.div`
	overflow: hidden;
  width: 19px;
  height: 19px;
  margin-left: 10px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #352d39;
  background-image: url('https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e680d9b80f8_default-account-pic.svg');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`
const Name = styled.div`
	margin-bottom: 0px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
	margin-left: 10px;
`

const Person = (props) => {
  return (
    <Div className={props.Class}>
      <Index>{props.id}</Index>
      <Block className={props.Class}>
        <ProfileImg></ProfileImg>
        <Name>{props.name}</Name>
      </Block>
    </Div>
  )
}

export default Person;

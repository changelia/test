import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 14px;
	position:relative;
`
const Triangle = styled.div`
	position: absolute;
  top: -13px;
  width: 0px;
  height: 0px;
  border-style: none solid solid;
  border-width: 0px 21px 24px;
  border-color: #000 transparent #fff;
  background-color: transparent;
`

const Links = styled.a`
	width: 90%;
  margin-right: 0px;
  margin-left: 0px;
  padding-top: 14px;
  padding-bottom: 14px;
  transition: background-color 200ms ease;
	text-align: center;
  display: block;
	color: #222222;
	text-decoration:none;
	:hover{
		background-color: #f5f5f5;
	}
`

const DropDownLinks = (props) => {

  if (props.toggle) {
    return (
      <Div>
        <Triangle />
        <Links href="#">Account setting</Links>
        <Links href="#">Manage users</Links>
        <Links href="#">Company pages</Links>
        <Links href="#">Ehalah Wishlist</Links>
        <Links href="#">Log out</Links>
      </Div>
    )
  } else {
    return null
  }
}

export default DropDownLinks
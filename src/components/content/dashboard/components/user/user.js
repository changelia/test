import React from 'react'
import styled from 'styled-components'
import UserHeader from './header'

const Div = styled.div`
	position: relative;
  z-index: 20;
  width: 32%;
  height: 460px;
  margin-bottom: 20px;
	margin-left: 0px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, .14), inset 0 -1px 0 0 #ddd;
	background: #fff;
`

const User = () => {
	return (
		<Div>
			<UserHeader />
		</Div>
	)
}

export default User
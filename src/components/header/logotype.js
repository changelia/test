import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Image = styled.img`
	height: 42px;
`
const Div = styled.div`
	color: #ffdf85;
	font-size: 27px;
	line-height: 26px;
	font-weight: 500;
`

const Logotype = () => {
	return (
		<Link to="/" className="logotype">
			<Image src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c2ec7469bc27a559c42458b_ehalah-app-logo.svg" />
			<Div>
				/Recruiter
			</Div>
		</Link>
	)
}

export default Logotype
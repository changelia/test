import React from 'react'
import styled from 'styled-components'

import LogoFooter from './logo'

const FooterContainer = styled.footer`
	background-color: #172333;
	width: 100%;
	padding-top: 30px;
	padding-bottom: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Div = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Span = styled.span`
	color: #fff;
  font-weight: 400;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Div>
        <LogoFooter />
        <Span>
          © Copyright 2019 Ehalah. All rights reserved
				</Span>
      </Div>
    </FooterContainer>
  )
}

export default Footer
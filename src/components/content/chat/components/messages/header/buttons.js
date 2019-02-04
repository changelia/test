import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`
const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-around;
	outline: none;
	background: transparent;
	padding: 8px 20px;
	border: 2px solid #84c9eb;
	border-radius: 300px;
	color: #84c9eb;
	margin-left: 1em;
	cursor: pointer;
	:nth-child(2){
	}
`
const Img = styled.img`
	width: ${({ width }) => width + 'px'};
`
const Span = styled.span`
	font-size: 15px;
  font-weight: 600;
`

const Box = styled.div`
	display: flex;
`

const Buttons = () => {
  return (
    <Div>
      <Box>
        <Button>
          <Img width={20} src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9ec9e59b814b_email-reply-icon-blue.svg" />
          <Span>Replay</Span>
        </Button>
        <Button>
          <Img width={20} src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e4d0d9b814c_email-forward-icon-blue.svg" />
          <Span>Forward</Span>
        </Button>
      </Box>
      <Box>
        <Button>
          <Img width={25} src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9ef40a9b8151_email-print-blue-icon.svg" />
        </Button>
        <Button>
          <Img width={25} src="https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c0b0a3081ab9e1ec79b8153_email-trash-blue-icon.svg" />
        </Button>
      </Box>
    </Div>
  )
}

export default Buttons
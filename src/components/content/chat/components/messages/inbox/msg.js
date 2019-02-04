import React from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router";


const Div = styled.div`
  display:flex;
  padding: 20px;
`
const Message = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #84c9eb;
  border-radius: 15px;
  position: relative;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;

`
const Img = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-left: 1px;
`
const Span = styled.span`
  margin-left: 10px;
`
const Subject = styled.div`
  padding: 15px 10px;
`
const Data = styled.div`
  position: absolute;
  right: 10px;
  top: 25px;
`
const Text = styled.div`
   padding: 15px 20px;
`
const Paragraph = styled.div`

`


const Msg = ({ match, object }) => {
  let index = parseInt(match.params.id);
  return (
    <Div>
      <Message>
        <Title>
          <Img src={object[index - 1].img} />
          <Span>{object[index - 1].name}</Span>
        </Title>
        <Subject>{object[index - 1].subject}</Subject>
        <Text>
          <Paragraph>{object[index - 1].mesaage}</Paragraph>
        </Text>
        <Data>{object[index - 1].data}</Data>
      </Message>
    </Div>
  )
}

export default withRouter(Msg)
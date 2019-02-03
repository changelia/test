import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
	position: relative;
  display: flex;
  overflow: hidden;
  width: 1330px;
  padding: 1px 0px;
  align-items: center;
  border-top: 1px none #c8c8c8;
  border-bottom: 1px none #c8c8c8;
  color: #444;
  line-height: 18px;
  font-weight: 500;
  text-align: center;
	.grey{
		background: #f5f5f5;
	}
`
const Inv = styled.div`
  display: flex;
  width: 14%;
  height: 59.7px;
  padding-right: 0px;
  padding-left: 0px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  flex: 0 auto;
  border-right: 2px solid #fff;
  color: #333;
  font-weight: 500;
  text-align: center;
`

const TableContent = (props) => {
  return (
    <Div>
      <Inv className={props.Class}>{props.title}</Inv>
      <Inv className={props.Class}>{props.function}</Inv>
      <Inv className={props.Class}>{props.connections}</Inv>
      <Inv className={props.Class}>{props.topTalents}</Inv>
      <Inv className={props.Class}>{props.potentialReferrals}</Inv>
      <Inv className={props.Class}>{props.contacted}</Inv>
      <Inv className={props.Class}>{props.cVsUploaded}</Inv>
    </Div>
  )
}

export default TableContent;

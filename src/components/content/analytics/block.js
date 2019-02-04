import React from 'react'
import styled from 'styled-components'

import Blockheader from './blockHeader'

const Div = styled.div`
	position: relative;
	z-index: 20;
	width: ${p => `${p.width}%`};
	height: 460px;
	margin-bottom: 20px;
	margin-left: 0px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, .14), inset 0 -1px 0 0 #ddd;
	background: #fff;
	@media(max-width:1120px){
		width: 100%;
		margin-right: 0;
  }
`

const Block = ({ width }) => {
	return (
		<Div width={width}>
			<Blockheader />
		</Div>
	)
}

export default Block
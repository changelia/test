import React from 'react';
import styled from 'styled-components'

import Person from './person'
import TableContent from './table-content'

const Container = styled.div`
	display: flex;
	padding: 0 30px;
`
const Col = styled.div`
	:nth-child(1){
		width: 280px;
		.hide{
			visibility: hidden;
		}
		.grey{
			background: #f5f5f5;
		}
	}
	:nth-child(2){
		width: calc(100% - 280px);
		overflow: auto;
		
	}
`
let persons = [
	{
		name: '',
		Class: 'hide',
		func:[
			{
				title:'Title',
				function:'Function',
				connections:'Connections',
				topTalents:'Top Talents',
				potentialReferrals:'Potential Referrals',
				contacted:'Contacted',
				cVsUploaded:'CVs Uploaded',
			}
		]
	},
	{
		name: 'Nasser Oudjidane',
		Class: 'grey',
		func:[
			{
				title:'Founder, CEO',
				function:'Sales',
				connections:'300',
				topTalents:'40',
				potentialReferrals:'500',
				contacted:'13',
				cVsUploaded:'15',
			}
		]
	},
	{
		name: 'Neel Jamie Sha',
		Class: '',
		func:[
			{
				title:'Creative Director',
				function:'UX & Design',
				connections:'400',
				topTalents:'39',
				potentialReferrals:'48',
				contacted:'90',
				cVsUploaded:'20',
			}
		]
	},
	{
		name: 'Benji Anthonisz',
		Class: 'grey',
		func:[
			{
				title:'Marketing Manager',
				function:'Marketing',
				connections:'70',
				topTalents:'50',
				potentialReferrals:'130',
				contacted:'302',
				cVsUploaded:'201',
			}
		]
	},
	{
		name: 'Lisa Simpson',
		Class: '',
		func:[
			{
				title:'Managion Director',
				function:'business Dev',
				connections:'271',
				topTalents:'82',
				potentialReferrals:'247',
				contacted:'526',
				cVsUploaded:'273',
			}
		]
	},
	{
		name: 'Nasser Oudjidane',
		Class: 'grey',
		func:[
			{
				title:'Founder, CEO',
				function:'Sales',
				connections:'300',
				topTalents:'40',
				potentialReferrals:'500',
				contacted:'13',
				cVsUploaded:'15',
			}
		]
	},
	{
		name: 'Neel Jamie Sha',
		Class: '',
		func:[
			{
				title:'Creative Director',
				function:'UX & Design',
				connections:'400',
				topTalents:'39',
				potentialReferrals:'48',
				contacted:'90',
				cVsUploaded:'20',
			}
		]
	},
]


const Table=()=>{
	return(
		<Container>
			<Col>	
				{
					persons.map((person, i)=>{
						return(
							<Person 
								name={person.name}
								key={i}
								id={i}
								Class={person.Class}
							/>
						)
					})
				}
			</Col>
			<Col>
				{
					persons.map((person, i)=>{
						return(
							<TableContent 
								title={person.func[0].title}
								function={person.func[0].function}
								connections={person.func[0].connections}
								topTalents={person.func[0].topTalents}
								potentialReferrals={person.func[0].potentialReferrals}
								contacted={person.func[0].contacted}
								cVsUploaded={person.func[0].cVsUploaded}
								key={i}
								Class={person.Class}
							/>
						)
					})
				}
			</Col>
		</Container>
	)
}

export default Table;

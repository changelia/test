import React from "react";
import styled from 'styled-components'

const Forms = styled.form`
  display: flex;
  align-items: center;
`
const Input = styled.input`
	width: 560px;
  height: 50px;
  margin-right: 10px;
  margin-bottom: 0px;
  padding-left: 42px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .2), hsla(0, 0%, 100%, .2)), url('https://uploads-ssl.webflow.com/5c0b0a3081ab9e82bf9b80b4/5c2eecc99bc27a6aa9426e12_dashboard-search-icon.svg');
  background-position: 0px 0px, 9px 50%;
  background-size: auto, 26px;
  background-repeat: repeat, no-repeat;
  font-weight: 500;
  font-size: 15px;
  color: #333333;
  border: 1px solid #cccccc;
  outline: none;
  @media(max-width:1200px){
    width: 400px;
  }
  @media(max-width:992px){
    width: 350px;
  }
`
const Button = styled.button`
  position: relative;
  width: 110px;
  height: 50px;
  border-radius: 4px;
  background-color: #172333;
  transition: opacity 200ms ease;
  display: inline-block;
  padding: 9px 15px;
  color: white;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  outline: none;
`

const SearchInput = () => {
  return (
    <Forms onSubmit={(e) => { e.preventDefault() }}>
      <Input placeholder="Search by skill, location, company or name..." />
      <Button>Search</Button>
    </Forms>
  )
}

export default SearchInput
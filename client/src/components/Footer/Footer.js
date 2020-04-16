import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

const Footer = () => {
  const state = useSelector(state => state)
  console.log(state); 
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
    <WrapperDiv>
      {/* <Title>About us</Title> */}
      <AboutUsDiv>
        <GridTitle>ABOUT US</GridTitle>
        <ul>
          <li>ABOUT</li>
          <li>PRESS</li>
          <li>CONTACT</li>
          <li>CAREER</li>
        </ul>
      </AboutUsDiv>
      <CustomerServiceDiv>
        <GridTitle>CUSTOMER SERVICE</GridTitle>
        <ul>
          <li>FAQ</li>
          <li>REPAIR SERVICE</li>
          <li>SIZE GUIDE</li>
          <li>TERMS & CONDITIONS</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </CustomerServiceDiv>
      <FollowUsDiv>
        <GridTitle>FOLLOW US!</GridTitle>
        <ul>
        <li>FACEBOOK</li>
        <li>INSTAGRAM</li>
        <li>PINTREST</li>
        </ul>
      </FollowUsDiv>
    </WrapperDiv>
</div>


  )
}

export default Footer;

const GridTitle = styled.div`
  text-decoration: underline;
  margin-bottom: 15px;
`

const WrapperDiv = styled.div`
      display: grid;
      grid-template-columns: 33% 33% 33%;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: 50px;
`

const AboutUsDiv = styled.div`
    width: 97%;
    text-align: left;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 0px;
    padding: 25px 0 25px 25px;
    /* cursor: pointer; */
`
const CustomerServiceDiv = styled.div`
    width: 97%;
    text-align: left;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: none;
    margin: auto;
    margin-top: 50px;
    padding: 25px 0 25px 50px;
    /* cursor: pointer; */
`
const FollowUsDiv = styled.div`
    width: 97%;
    text-align: left;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left: -1px;
    /* & :hover { 
      font-weight: bold;
    } */
    padding: 25px 0 25px 25px;
    /* cursor: pointer; */
`

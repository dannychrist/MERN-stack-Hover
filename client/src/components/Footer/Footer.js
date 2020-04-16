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
        About us
        <ul>
          <li>About</li>
          <li>Press</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
      </AboutUsDiv>
      <CustomerServiceDiv>
        Customer Service
        <ul>
          <li>FAQ</li>
          <li>Repair Service</li>
          <li>Size Guide</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </CustomerServiceDiv>
      <FollowUsDiv>
        Follow us!
        <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Pintrest</li>
        </ul>
      </FollowUsDiv>
    </WrapperDiv>
</div>


  )
}

export default Footer;

const WrapperDiv = styled.div`
      margin-top: 50px;
      display: grid;
      grid-template-columns: 33% 33% 33%;
      font-family: 'Open Sans', sans-serif;
`

const AboutUsDiv = styled.div`
    width: 97%;
    text-align: left;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 0px;
    padding: 25px 0 25px 10px;
    /* cursor: pointer; */
`
const CustomerServiceDiv = styled.div`
    width: 97%;
    text-align: left;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
    padding: 25px 0 25px 10px;
    /* cursor: pointer; */
`
const FollowUsDiv = styled.div`
    width: 97%;
    text-align: left;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 0px;
    /* & :hover { 
      font-weight: bold;
    } */
    padding: 25px 0 25px 10px;
    /* cursor: pointer; */
`

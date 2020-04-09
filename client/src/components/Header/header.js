import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import GlobalStyles from '../GlobalStyles/GlobalStyles'

const Header = () => {
    return (
        <HeaderDiv>
            <NavLink exact to='/' activeStyle={{textDecoration: 'underline'}}>HOME</NavLink>
            <NavLink exact to='/shop' activeStyle={{textDecoration: 'underline'}}>SHOP</NavLink>
            <NavLink exact to='/cart' activeStyle={{textDecoration: 'underline'}}>CART</NavLink>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
    font-family: 'Open Sans', sans-serif; 
    padding: 25px 0 25px 0;
    text-align: right;

    a{
        text-decoration: none;
        color: black;
        margin: 0 20px 0 20px;
    }
`

export default Header
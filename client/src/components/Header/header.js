import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
  const [quantity, setQuantity] = React.useState(null)
  const cartNumber = useSelector(state => state.cart);
  const cartValues = Object.values(cartNumber);
  let counter = 0;

  React.useEffect(() => {
    cartValues.forEach(item => {
      setQuantity(counter += item.quantity)
    })
  },[cartValues])
  console.log(typeof cartNumber, 'cart')
  console.log(cartValues, 'values')
  console.log(quantity, 'quantity')
  return (
    <HeaderDiv>
      <Logo>H+VER</Logo>
      <LinkDiv>
        <li>
          <NavLink exact to='/' activeStyle={{ textDecoration: 'underline' }}>
            HOME
          </NavLink>  
        </li>
        <li>
          <NavLink exact to='/shop' activeStyle={{ textDecoration: 'underline' }}>
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/cart' style={{display:'flex'}} activeStyle={{ textDecoration: 'underline' }}>
            CART &thinsp; {quantity > 0 ? <div>&#40;{quantity}&#41;</div> : null}
          </NavLink>
        </li>
      </LinkDiv>
    </HeaderDiv>
  );
};

const Logo = styled.div`
  font-size: 30px;
  font-family:'Righteous', cursive;
  margin-left: 40px;
`

const LinkDiv = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 40px;
`

const HeaderDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-top: 50px;
  font-family: 'Open Sans', sans-serif;
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    margin-left: 40px;
  }
`;

export default Header;

import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatPriceForHumans } from '../../helpers';

import CartItem from '../Cart/CartItem';

const Cart = () => {
  const products = useSelector(state => state.cart);
  

  console.log(products)

  return (
    <Wrapper>
      <Top>
        <Title>YOUR CART</Title>
      </Top>
      
      <ItemList>
        <ItemHeader>
          <Header>Item</Header>
          <Header></Header>
          <Header>Price</Header>
          <Header>Qty</Header>
          <Header>Total</Header>
        </ItemHeader>
        
          {Object.values(products).map((product) => (
              <CartItem key={product.id} product={product} products={products} />
            ))}
      </ItemList>
      
      <Bottom>
        <Total>
          Total:
        </Total>
        <ButtonWrapper>
          <Button exact activeClassName='active' to='/shop' style={{ width: 170 }}>Continue Shopping</Button>
        </ButtonWrapper>
      </Bottom>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  width: 100%
  color: white;
  border: 1px solid black;
  padding: 25px 0 25px 0;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
`;

const Top = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const ItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 50px;
  margin: 30px;
  border-top: 1px solid black;
`;

const ItemHeader = styled.div`
  display: grid; 
  grid-template-columns: 32% 32% 12% 12% 12%;
  color: black;
  height: 5vh;
  border: 1px solid black;
  margin: 2px;
  
`;

const Header = styled.div`
  justify-items: center;
  text-align: center;
  margin-top: 10px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Total = styled.div`
  font-size: 22px;
  color: black;
  padding: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled(NavLink)`
  margin: 10px;
  display: block;
  width: 100%;
  background: white;
  color: black;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  text-decoration: none; 
  
  &:hover {
    background: black;
    color: white;
  }
`;

export default Cart

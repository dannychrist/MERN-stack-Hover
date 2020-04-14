import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import ProductsList from '../ProductsList/ProductsList';
import {
  receiveAllProducts,
  requestAllProducts,
  receiveProductsError,
  GetProductsDesc,
  GetProductsAsc,
} from '../../actions';

import Categories from '../Categories/Categories';
import Brands from '../Brands/Brands';

const Shop = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const getAllProducts = () => {
    /// Clears the localstorage
    window.localStorage.clear();
    dispatch(requestAllProducts());
    fetch('/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) dispatch(receiveAllProducts(data));
        else dispatch(receiveProductsError(data));
      });
  };

  return (
    <WrapperDiv>
      <CategoryDiv>
        <AllProducts onClick={() => getAllProducts()}>
          + All PRODUCTS
        </AllProducts>
        <Categories />
        <Brands companies={state.companies.companies} />
      </CategoryDiv>
      <ItemDiv>
        <ProductsList products={state.products.products} />
      </ItemDiv>
      <SortDiv>
        <AllProducts onClick={() => getAllProducts()}>
          LATEST ARRIVAL +
        </AllProducts>
        <PriceFilterText
          onClick={() => dispatch(GetProductsAsc(state.products.products))}
        >
          PRICE: LOW TO HIGH
        </PriceFilterText>
        <PriceFilterText
          Z
          onClick={() => dispatch(GetProductsDesc(state.products.products))}
        >
          PRICE: HIGH TO LOW
        </PriceFilterText>
      </SortDiv>
    </WrapperDiv>
  );
};

const CategoryDiv = styled.div`
  width: 100%;
  text-align: left;
`;

const SortDiv = styled.div`
  width: 100%;
  text-align: right;
`;

const ItemDiv = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  border: 2px solid #000;
  position: relative;
`;

const WrapperDiv = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 20% auto 20%;
  height: 500px;
  font-family: 'Open Sans', sans-serif;
`;

const AllProducts = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const PriceFilterText = styled.p`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export default Shop;

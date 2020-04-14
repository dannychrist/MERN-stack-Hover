import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  requestAllProducts,
  receiveAllProducts,
  receiveProductsError,
} from '../../actions';

const Brands = ({ companies }) => {
  const dispatch = useDispatch();

  // Change the state array and store all products by a brand
  const getProductsByBrands = (e) => {
    window.localStorage.setItem('brand', e.target.id);
    dispatch(requestAllProducts());

    fetch(
      `/search?brand=${window.localStorage.getItem(
        'brand'
      )}&category=${window.localStorage.getItem('category')}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) dispatch(receiveAllProducts(data));
        else dispatch(receiveProductsError(data));
      });
  };

  return (
    <React.Fragment>
      <span style={{ fontWeight: 'bold' }}>BRANDS</span>
      {companies.map((company) => {
        return (
          <Brand
            isSelected={
              company.id === parseInt(window.localStorage.getItem('brand'))
            }
            onClick={(e) => getProductsByBrands(e)}
            id={company.id}
          >
            {company.name}
          </Brand>
        );
      })}
    </React.Fragment>
  );
};

const Brand = styled.div`
  margin: 5px 0px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  font-weight: ${(props) => props.isSelected && 'bold'};
`;

export default Brands;

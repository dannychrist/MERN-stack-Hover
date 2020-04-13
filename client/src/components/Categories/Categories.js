import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  requestAllProducts,
  receiveAllProducts,
  receiveProductsError,
} from '../../actions';

const Categories = () => {
  const [categories, SetCategories] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('/categories')
      .then((res) => res.json())
      .then((data) => SetCategories(data));
  }, []);

  const getProductsByCategories = (e) => {
    window.localStorage.setItem('category', e.target.id);
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <span style={{ fontWeight: 'bold' }}>CATEGORIES</span>
      {categories.map((caterogyName, index) => {
        return (
          <CategoriesLabel
            key={index}
            onClick={(e) => getProductsByCategories(e)}
            id={caterogyName}
          >
            {caterogyName}
          </CategoriesLabel>
        );
      })}
    </div>
  );
};

const CategoriesLabel = styled.div`
  margin: 5px 0px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export default Categories;

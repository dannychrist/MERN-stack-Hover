import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//components
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import Header from '../components/Header/header';

// Import actions
import {
  receiveAllProducts,
  requestAllProducts,
  receiveProductsError,
  requestAllCompanies,
  receiveAllCompanies,
  receiveCompaniesError,
} from '../actions';

// Import products and companies state
import { getProducts, getProductsStatus } from '../reducers/products-reducer';
import {
  getCompanies,
  getCompaniesStatus,
} from '../reducers/companies-reducer';

function App() {
  const dispatch = useDispatch();

  const productsState = useSelector(getProducts);
  const productsStatus = useSelector(getProductsStatus);
  const companiesState = useSelector(getCompanies);
  const companiesStatus = useSelector(getCompaniesStatus);

  useEffect(() => {
    // Fetches all the products
    dispatch(requestAllProducts());
    fetch('/products')
      .then((res) => res.json())
      .then((data) => dispatch(receiveAllProducts(data)))
      .catch((err) => dispatch(receiveProductsError()));

    // Fetches all the companies
    dispatch(requestAllCompanies());
    fetch('/companies')
      .then((res) => res.json())
      .then((data) => dispatch(receiveAllCompanies(data)))
      .catch((err) => dispatch(receiveCompaniesError()));
  }, []);

  const state = useSelector((state) => state.products);
  console.log(state);
  return (
    <Router>
      <div style={{ padding: '0 2.5% 0 2.5%' }}>
        <Header />
        <Switch>
          <Route exact path='/'>
            Home
          </Route>
          <Route exact path='/shop'>
            Shop
          </Route>
          <Route exact path='/shop/:id'>
            Shop with filter
          </Route>
          <Route exact path='/product/:productId'>
            Single item
          </Route>
          <Route exact path='/cart'>
            cart
          </Route>
        </Switch>
      </div>
      <GlobalStyles />
    </Router>
  );
}
export default App;

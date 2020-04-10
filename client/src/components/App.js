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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllProducts());
    fetch('/products')
      .then((res) => res.json())
      .then((data) => dispatch(receiveAllProducts(data)))
      .catch((err) => dispatch(receiveProductsError()));

    dispatch(requestAllCompanies());
    fetch('/companies')
      .then((res) => res.json())
      .then((data) => dispatch(receiveAllCompanies(data)))
      .catch((err) => dispatch(receiveCompaniesError()));
  }, []);

  const state = useSelector((state) => state.products);
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

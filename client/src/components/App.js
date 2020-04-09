import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

//components
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header/header'

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <Router>
      <div style={{padding: '0 2.5% 0 2.5%'}}>
        <Header/>
        <Switch>
          <Route exact path='/'>Home</Route>
          <Route exact path='/shop'>Shop</Route>
          <Route exact path='/shop/:id'>Shop with filter</Route>
          <Route exact path='/product/:productId'>Single item</Route>
          <Route exact path='/cart'>cart</Route>
        </Switch>
      </div>
      <GlobalStyles />
    </Router>
  )
}
export default App;

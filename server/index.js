'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 4000;

const { 
getProducts, 
getCompanies,
getCategories,
purchaseItem,
searchItem,
} = require('./handlers'); 

express()
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // GET Returns all the products DONE
  .get('/products', getProducts)

  // GET Returns all the companies DONE
  .get('/companies', getCompanies)

  // GET Get all the categories DONE
  .get('/categories', getCategories)

  // PUT Modifies the inventory DONE
  .put('/products/purchase-item', purchaseItem)

  // GET search fields DONE
  .get('/search', searchItem)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

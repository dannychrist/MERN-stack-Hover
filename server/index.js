'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 4000;

// Import all the data
const items = require('./data/items.json');
const companies = require('./data/companies.json');

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

  // REST endpoints?
  .get('/bacon', (req, res) => res.status(200).json('🥓'))

  // GET Returns all the products
  .get('/products', (req, res) => {
    res.status(200).send(items);
  })

  // GET a company by its id number
  .get('/company/id/:id', (req, res) => {
    // Checks if the company exists
    const currentCompany = companies.find(
      (company) => company.id === parseInt(req.params.id)
    );

    if (currentCompany) res.status(200).send(currentCompany);
    else {
      res
        .status(404)
        .send({ type: 'Error', message: "The company doesn't exist!" });
    }
  })

  // GET Get a company by its name
  .get('/company/name/:name', (req, res) => {
    // Checks if the company exists
    const currentCompany = companies.find(
      (company) => company.name.toLowerCase() === req.params.name.toLowerCase()
    );

    if (currentCompany) res.status(200).send(currentCompany);
    else {
      res
        .status(404)
        .send({ type: 'Error', message: "The company doesn't exist!" });
    }
  })

  // GET Get all products from company id
  .get('/products/company/id/:id', (req, res) => {
    // Check if company exists
    const currentCompany = companies.find(
      (company) => company.id === parseInt(req.params.id)
    );

    if (currentCompany) {
      const allProducts = items.filter(
        (item) => item.companyId === parseInt(req.params.id)
      );

      if (allProducts) res.status(200).send(allProducts);
      else
        res.status(404).send({ type: 'Error', message: "There's no products" });
    } else {
      res
        .status(404)
        .send({ type: 'Error', message: "The company doesn't exist" });
    }
  })

  // PUT Modifies the inventory of an item
  .put('/products/purchase-item', (req, res) => {
    //  Check if the item passed exists
    const itemExists = items.find((item) => item.id === parseInt(req.body.id));

    // Check if item exists
    if (itemExists) {
      // checks if there's enough product
      if (itemExists.numInStock - req.body.quantity >= 0) {
        itemExists.numInStock -= req.body.quantity; // removes the number of items from the inventory
        res.status(200).send({ success: 'true' });
      } else {
        res.status(409).send({
          type: 'Error',
          message: 'Not enough products in the inventory',
        });
      }
    } else {
      res
        .status(404)
        .send({ type: 'Error', message: "Product doesn't exists" });
    }
  })

  // GET Get all the categories
  .get('/categories', (req, res) => {
    let categories = [];

    // Pushes all categories inside the array
    items.forEach((item) => {
      if (!categories.includes(item.category)) categories.push(item.category);
    });

    res.status(200).send(categories);
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

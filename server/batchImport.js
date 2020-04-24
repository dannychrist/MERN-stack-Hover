'use strict'

const fs = require('file-system');
const items = require('./data/fixedItems.json')
const companies = require('./data/fixedCompanies.json')

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')

const uri ="mongodb+srv://dannychrist:1234@cluster0-a7fhs.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getCompanies = async () => {
  try {
  await client.connect();
  const db = client.db('hover');
  const r = await db.collection('companies').insertMany(companies);

  assert.equal(companies.length, r.insertedCount);
  console.log('success');
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
}

const getItems = async () => {
  try {
  await client.connect();
  const db = client.db('hover');
  const r = await db.collection('items').insertMany(items);
  assert.equal(items.length, r.insertedCount);
  console.log('success');
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
}

getCompanies();
getItems();
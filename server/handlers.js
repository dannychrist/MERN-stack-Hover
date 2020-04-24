const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const getProducts = async (req, res) => {
  const uri ="mongodb+srv://dannychrist:1234@cluster0-a7fhs.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
    const db = client.db('hover');
    db.collection('items')
      .find()
      .toArray((err, data) => {
        if (data) res.status(200).send(data);
        else client.close();
      });
}

const getCompanies = async (req, res) => {
  const uri ="mongodb+srv://dannychrist:1234@cluster0-a7fhs.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
    const db = client.db('hover');
    db.collection('companies')
      .find()
      .toArray((err, data) => {
        if (data) res.status(200).send(data);
        else client.close();
      });
}

const getCategories = async (req, res) => {
  const uri ="mongodb+srv://dannychrist:1234@cluster0-a7fhs.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let categories = [];
  console.log('ding')
  await client.connect();
  const db = client.db('hover');

  db.collection('items')
      .find()
      .toArray((err, data) => {
          if (data) {
              data.forEach((item) => {
                  if (!categories.includes(item.category)) categories.push(item.category);
              })
          }
          console.log(categories)
          res.status(200).send(categories)
      })
}

const purchaseItem = async (req, res) => {
  const uri ="mongodb+srv://dannychrist:1234@cluster0-a7fhs.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  const currentCart = [];
  req.body.forEach((item) => {
    if (item.quantity !== 'undefined') currentCart.push(item);
    else
      res
        .status(404)
        .send({ type: 'Error', message: 'The quantity is not specified' });
  });
  const db = client.db('hover');
  currentCart.forEach(async (itemCart) => {
    db.collection('items').findOne({ _id: itemCart._id }, (err, item) => {
      if (
        itemCart.id === item.id &&
        item.numInStock >= itemCart.quantity &&
        itemCart.quantity >= 0
      ) {
        db.collection('items').updateOne(
          { _id: itemCart._id },
          { $set: { numInStock: (item.numInStock -= itemCart.quantity) } }
        );
      }
    });
  });
  res.status(200).send({ success: true });
};

const searchItem = async (req, res) => {
  const uri ="mongodb+srv://dannychrist:1234@cluster0-a7fhs.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db('hover');
  if (req.query.brand !== 'null' && req.query.category !== 'null') {
    db.collection('items')
      .find()
      .toArray((err, items) => {
        let copy = items.filter((product) => {
          return (
            product.category.toLowerCase() ===
              req.query.category.toLowerCase() &&
            parseInt(req.query.brand) === product.companyId
          );
        });
        if (copy.length > 0) res.send(copy);
        else {
          client.close();
          res.status(202).send({ type: 'error', message: 'No items!' });
        }
      });
  } else if (req.query.brand !== 'null') {
    db.collection('items')
      .find()
      .toArray((err, items) => {
        let copy = items.filter((product) => {
          return parseInt(req.query.brand) === product.companyId;
        });
        if (copy.length > 0) res.send(copy);
        else {
          client.close();
          res.status(202).send({ type: 'error', message: 'No items!' });
        }
      });
  } else if (req.query.category !== 'null') {
    db.collection('items')
      .find()
      .toArray((err, items) => {
        let copy = items.filter((product) => {
          return (
            product.category.toLowerCase() === req.query.category.toLowerCase()
          );
        });
        if (copy.length > 0) res.send(copy);
        else {
          client.close();
          res.status(202).send({ type: 'error', message: 'No items!' });
        }
      });
  }
};

module.exports = { 
  getProducts,
  getCompanies,
  getCategories,
  purchaseItem,
  searchItem,
};
// insert customers document
db.customers.insertOne({
  _id: "edo",
  name: "Edo Riansyah",
});

// insert products document
db.products.insertMany([
  {
    _id: 1,
    name: "Indomie Ayam Bawang",
    price: new NumberLong(2000),
  },
  {
    _id: 2,
    name: "Mie Sedap Soto",
    price: new NumberLong(2000),
  },
]);

// insert orders document
db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong(8000),
  items: [
    {
      product_id: 1,
      price: new NumberLong(2000),
      quantity: new NumberInt(2),
    },
    {
      product_id: 2,
      price: new NumberLong(2000),
      quantity: new NumberInt(2),
    },
  ],
  customer_id: "edo",
});

// select * from customers where id = 'edo'
db.customers.find({
  _id: "edo",
});

// select * from customers where name = 'Edo Riansyah'
db.customers.find({
  name: "Edo Riansyah",
});

// select * from products where price = 2000
db.products.find({
  price: 2000,
});

// select * from orders where items.product_id = 1
db.orders.find({
  "items.product_id": 1,
});

// insert products document
db.products.insertMany([
  {
    _id: 3,
    name: "Pop Mie Rasa Bakso",
    price: new NumberLong(2500),
    category: "food",
  },
  {
    _id: 4,
    name: "Pocari Sweat",
    price: new NumberLong(5000),
    category: "drink",
  },
  {
    _id: 5,
    name: "Silverqueen",
    price: new NumberLong(8000),
    category: "food",
  },
  {
    _id: 6,
    name: "Samsung Galaxy S20",
    price: new NumberLong(14000000),
    category: "handphone",
  },
  {
    _id: 7,
    name: "Macbook Pro 2020",
    price: new NumberLong(30000000),
    category: "laptop",
  },
]);

// select * from customers where _id = "edo"
db.customers.find({
  _id: {
    $eq: "edo",
  },
});

// select * from products where price > 10000
db.products.find({
  price: {
    $gt: 10000,
  },
});

// select * from products where category in ('handphone', 'laptop') and price > 5000000
db.products.find({
  category: {
    $in: ["handphone", "laptop"],
  },
  price: {
    $gt: 5000000,
  },
});

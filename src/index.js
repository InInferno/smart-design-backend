import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import ProductController from './controllers/ProductController';
const Product = new ProductController();

const app = express();

mongoose.connect('mongodb://localhost/smart-design-server');

// For CORS
app.use(function(req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  });
  return next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/products', Product.index);
app.get('/products/:id', Product.read);
app.get('/products/name/:name', Product.name);
app.get('/products/parameters/:parameter/:value', Product.parameter);
app.post('/products', Product.create);
app.put('/products/:id', Product.update);
app.delete('/products/:id', Product.delete);

app.listen(27017, () => console.log("Server running on 27017 port"));

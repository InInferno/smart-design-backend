import ProductModel from '../models/Products';
import Product from '../models/Products';

class ProductController {

  index(req, res) {
    
    Product.find().then((err, products) => {
      if(err){
        return res.send(err);
      }
        return res.json(products);
    });
  }

  read(req, res) {
    ProductModel.findOne({ _id: req.params.id}).then(product => {
      console.log('index1', product)
      if(!product) {
        return res.send({ error:"not found"});
      } else {
        console.log('id', product)
        return res.json(product);
      }
    })
  }

  name(req, res) {
    ProductModel.find({ name: req.params.name}).then(products => {
      if(!products) {
        return res.send({ error:"not found"});
      } else {
        console.log('name', products)
        return res.json(products);
      }
    })
  }

  parameter(req, res) {

    const par = req.params.parameter;
    const value = req.params.value;
    const parameters = {};
    const param = `parameters.${par}`;
    parameters[param] = value;

    ProductModel.find(parameters).then(products => {
      if(!products) {
        return res.send({error: "not found"});
      } else {
        return res.json(products);
      }
    })
  }

  create(req, res) {
    const data = req.body;
    const product = new ProductModel({
      name: data.name,
      description: data.description,
      parameters: data.parameters
    });

    product.save().then(() => {
      return res.send({ status: "OK"});
    });
  }

  update(req, res)  {
    ProductModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if(err) {
      return res.send(err);
      }
      return res.json({ status: "update"});
    });
  }
  
  delete(req, res)  {
    ProductModel.remove({
      _id: req.params.id
    }).then(post => {
      if(post) {
        return res.json({ status: "deleted"});
      } else {
        return res.json({ status: "error"});
      }
    });
  }
};

export default ProductController;
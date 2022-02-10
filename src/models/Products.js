import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    id: String,
    name: String,
    description: String,
    parameters: {
      parameterOne: String,
      parameterTwo: String,
    }
  },
  {
    timestamps: true
  }
);
const Product = mongoose.model('Product', ProductSchema);

export default Product;
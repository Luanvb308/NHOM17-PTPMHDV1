const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id:{type: String , required : true },
    name: { type: String, required: true },
    hardness: { type: String, required: true },
    racketFrame: { type: String, required: true },
    weight: { type: Number, required: true },
    balance: { type: String, required: true },
    swing: { type: String, required: true },
    maxStrength: { type: Number, required: true },
    color: { type: String, required: true },
    manufacture: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true }

},{
    collection: "Product",
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
exports.getProductById = (productId) => {
    const products = getProductsFromFile();
    const product = products.find(p => p._id.toString() === productId);
    console.log(product);
  };
const mongoose = require('mongoose');

//Schema

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productDesc: {
            type: String,
            required: false
        },
        productImage: {
            type: String,
            required: true
        },

        sku: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        uploadedDate: {
            type: Date,
            required: true,
            default: Date.now
        },
    }
);

//Model
const ProductModel = mongoose.model('products', ProductSchema);

// Export the model
module.exports = ProductModel;
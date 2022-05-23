const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    category: {type: String, lowercase : true},
    filtrer: String,
    prise: Number
}, {collection: 'products'});

module.exports = mongoose.model('Product', productSchema)
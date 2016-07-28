var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
		index: true
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0
	}
})

module.exports = mongoose.model('Product', productSchema)
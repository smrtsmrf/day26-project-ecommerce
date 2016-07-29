var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
	product: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Product', 
		required: true 
	},
	quantity: { 
		type: Number, 
		min: 1, 
		required: true 
	}
});

module.exports = cartSchema;
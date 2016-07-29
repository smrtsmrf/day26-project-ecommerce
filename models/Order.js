var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = require('./Product');

var orderSchema = new Schema({
	user: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User', 
		required: true 
	},
	products: [{
		product: [productSchema],
		quantity: { 
			type: Number, 
			required: true, 
			min: 1 
		}
	}],
	placed: { 
		type: Date, 
		required: true, 
		default: Date.now 
	}
});

module.exports = mongoose.model('Order', orderSchema)
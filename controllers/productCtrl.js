var Product = require('../models/Product');

module.exports = {
	index: function (req, res, next) {
		Product.find(req.query, function (err, result) {
			err ? res.status(500).send(err) : res.send(result);
		})
	},

	create: function (req, res, next) {
		var newProduct = new Product(req.body);
		newProduct.save(function (err, result) {
			err ? res.status(500).send(err) : res.send(result);
		})
	},

	update: function(req, res) {
		Product.findByIdAndUpdate(req.query.id, req.body, function(err, result) {
			err ? res.status(500).send(err) : res.send(result);
		})
	},

	destroy: function(req, res) {
		Product.findByIdAndRemove(req.query.id, function(err, result) {
			err ? res.status(500).send(err) : res.send(result);
		})
	}
}
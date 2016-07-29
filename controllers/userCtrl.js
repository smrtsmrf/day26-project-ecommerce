var User = require('../models/User');

module.exports = {
	index: function(req, res) {
		User.findById(req.params.user_id)
		.populate('cart/product')
		.exec()
		.then(function(result) {
			res.send(result)
		}, function(err) {
			res.status(500).send(err)
		})
	}, 
	create: function (req, res, next) {
		var newUser = new User(req.body);
		newUser.save(function (err, result) {
			err ? res.status(500).send(err) : res.send(result);
		})
	}
}
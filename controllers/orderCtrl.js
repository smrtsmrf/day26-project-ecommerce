var User = require('../models/User');
var Order = require('../models/Order');

module.exports = {
	create: function(req, res) {
		var userId = req.params.user_id;
		User.findById(userId, function (err, result) {
			if (err) {
				res.status(500).send(err)
			}
			var userObj = result;
			var userOrder = {};
			userOrder.products = userObj.cart;
			userOrder.userId = userId;
			var newOrder = new Order(userOrder);
			newOrder.save(function(err, result) {
				if (err) {
					res.status(500).send(err)
				}
				userObj.cart = [];
				userObj.orders.push(mongoose.Types.ObjectId(result._id));
				userObj.save(function(err, result) {
					err ? res.status(500).send(err) : res.send(result)
				})
			})
		})
	},

	index: function(req, res) {
		Order.find(req.query,function(err, result) {
			err ? res.status(500).send(err) : res.send(result)
		})
	}
}
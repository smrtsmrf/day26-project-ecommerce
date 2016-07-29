// var Cart = require('../models/Cart');
var User = require('../models/User');

module.exports = {
	create: function(req, res) {
		User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, result) {
			err ? res.status(500).send(err) : res.send(result);
		})
	},
	update: function(req, res) {
		User.findById(req.params.user_id, function(err, result) {
			if (err) {
				res.status(500).send(err)
			}
			var myUser = result;
			var qty = req.query.qty/1;
			var foundItem = -1;
			myUser.cart.forEach( function(cartItem, index) {
				if (cartItem._id.toString() === req.query.itemId) {
					foundItem = index;
				};
			});
			if (foundItem >= 0) {
				console.log("Found Item =", foundItem);
				if (qty === 0) {
					myUser.cart.splice(foundItem,1);
				}
				else {
					myUser.cart[foundItem].qty = qty
				}
			};
			saveUser(myUser, req, res)
		})
		function saveUser (userToSave, req, res) {
			userToSave.save(function(err, result) {
				err ? res.status(500).send(err) : res.send(result)
			}) 
		}
	}
}
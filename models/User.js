var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var cartSchema = require('./Cart');

var userSchema = new Schema({
	name: { 
		type: String, 
		required: true 
	},
	email: { 
		type: String, 
		required: true, 
		unique: true, 
		index: true 
	},
	password: { 
		type: String, 
		required: true 
	},
	cart: [cartSchema],
	orders: []
});

userSchema.pre('save', function(next){
	var user = this;
	if(!this.password){
		return next(new Error('Password required'));
	}
	bcrypt.genSalt(10, function(err, salt){ // generate salt
		if(err){
			return next(new Error(err));
		}
		console.log(user.password, salt);
		bcrypt.hash(user.password, salt, function(err, hash){ // generate password hash
			if(err) {
				return next(new Error(err));
			}
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.checkPw = function(pw, cb){
	bcrypt.compare(pw, this.password, function(err, res){
		if(err){
			return cb(err, null);
		} else {
			return cb(null, res);
		}
	})
}


module.exports = mongoose.model('User', userSchema);
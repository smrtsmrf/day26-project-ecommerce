var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var productCtrl = require('./controllers/productCtrl');
var cartCtrl = require('./controllers/cartCtrl');
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');

var port = 3000;
var corsOptions = {
	origin: 'http://localhost:' + port
};

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cors())
app.use(express.static(__dirname + '/public/'));

app.listen(port, function () {
	console.log('listening on', port);
})

mongoose.connect('mongodb://localhost:27017/ecommerce-3', function (err) {
	if (err) throw err;
});

// product CRUD
app.post('/api/products', productCtrl.create);
app.get('/api/products', productCtrl.index);
app.put('/api/products', productCtrl.update);	
app.delete('/api/products', productCtrl.destroy);

// cart CRUD
app.post('/api/cart/:user_id', cartCtrl.create);
app.put('/api/cart/:user_id', cartCtrl.update);	

// user CRUD
app.get('/api/user/:id', userCtrl.index);
app.post('/api/user', userCtrl.create);

// order CRUD 
app.post('/api/order/:user_id', orderCtrl.create);
app.get('/api/order', orderCtrl.index);
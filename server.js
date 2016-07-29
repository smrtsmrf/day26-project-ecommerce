var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var productCtrl = require('./controllers/productCtrl')

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

app.post('/api/products', productCtrl.create);

app.get('/api/products', productCtrl.index);

app.put('/api/products', productCtrl.update);	

app.delete('/api/products', productCtrl.destroy);
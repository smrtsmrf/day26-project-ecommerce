var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

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

var db = mongojs('ecommerce', ['products'])

app.post('/api/products', function (req, res, next) {
	db.products.save(req.body, function(error, response){
		return error ? res.status(500).json(error) : res.json(response);
	})
});

app.get('/api/products', function (req, res, next) {
	var query = req.query;
	db.products.find(query, function (error, response) {
		return error ? res.status(500).json(error) : res.json(response);	
	})
});

app.get('/api/products/:id', function (req, res, next) {
	var idObj = {_id: ObjectId(req.params.id)}
	db.products.findOne(idObj, function (error, response) {
		return error ? res.status(500).json(error) : res.json(response);	
	})
});

app.put('/api/products/:id', function (req, res, next) {
	if (!req.params.id) {
		return res.status(400).send('id query needed');
	};

	var query = {_id: ObjectId(req.params.id)}
	db.products.update(query, req.body, function (error, response) {
		return error ? res.status(500).json(error) : res.json(response);	
	})
});

app.delete('/api/products/:id', function (req, res, next) {
	if (!req.params.id) {
		return res.status(400).send('id query needed');
	};

	var query = {_id: ObjectId(req.params.id)}
	db.products.remove(query, function (error, response) {
		return error ? res.status(500).json(error) : res.json(response);	
	})
});

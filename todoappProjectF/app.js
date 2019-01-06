var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/views'));
app.get('/', function(req, res) {
  res.sendFile ('index.html');
})

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

//middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

//get html file
app.get('/', function(req, res){
    res.sendFile("index.html");
});



app.listen(3000);

console.log('todo list RESTful API server started on: ' + port);

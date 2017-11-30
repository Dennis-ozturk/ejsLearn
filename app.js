var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
/*
var logger = function(req, res, next){
  console.log('Logging...');
  next();
}

app.use(logger);
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
  {
    first_name: 'John',
    last_name: 'doe',
    email: 'johndoe@hotmail.com'
  }
  {
    first_name: 'Dennis',
    last_name: 'Ozturk',
    email: 'johndoe@hotmail.com'
  }
  {
    first_name: 'Jill',
    last_name: 'Jackson',
    email: 'johndoe@hotmail.com'
  }
]

app.get('/', function(req, res){
  res.render('index', {
    title: 'Customers'
  });
});

app.listen(3000, function(){
  console.log('Server started at 3000');
})

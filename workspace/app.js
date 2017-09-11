var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//static file directory
app.use(express.static('./public'));

//body-parser config
app.use(bodyParser.json());

//set the view for ejs
app.set('view engine','ejs');

//set views directory
app.set('views','./public/views');

// router login
app.get('/Quiz1', function (req, res) {
//  res.send('works fine')
 res.render('jogos/jogo'); //the new game ejs
});

app.get('/Quiz2',function(req, res){

  res.render('jogos/jogo2');
});

app.get('/', function(req, res){

   res.render('index/index');

});

app.get('/cadastro', function(req, res){
  res.render('cadastro/cadastro');
});

app.get('/dashbord', function(req, res){
 res.render('jogos/dashbord');
});

app.get('/gamelist', function(req,res){
 res.render('jogos/GameList');
});

module.exports = app;

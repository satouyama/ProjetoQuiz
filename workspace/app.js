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

// router first game
app.get('/Quiz1', function (req, res) {
//  res.send('works fine')
 res.render('jogos/jogo'); //the new game ejs
});
//router second game
app.get('/Quiz2',function(req, res){

  res.render('jogos/jogo2');
});

//router login page
app.get('/', function(req, res){

   res.render('index/index');

});

//router register
app.get('/cadastro', function(req, res){
  res.render('cadastro/cadastro');
});

//router dashbord for information
app.get('/dashbord', function(req, res){
 res.render('jogos/dashbord');
});

//router game list
app.get('/gamelist', function(req,res){
 res.render('jogos/GameList');
});

app.get('/ajuda',function(req, res){
 res.render('jogos/ajuda');
})

module.exports = app;

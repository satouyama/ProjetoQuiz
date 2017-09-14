var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consign = require('consign');

//static file directory
app.use(express.static('./public'));

//body-parser config
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));
//set the view for ejs
app.set('view engine','ejs');

//set views directory
app.set('views','./public/views');

consign().include('').then('./config/dbConnection.js').then('./DAO').into(app);

// router login

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
// router game help
app.get('/ajuda',function(req, res){
 res.render('jogos/ajuda');
});
//router get cadastro
app.post('/cadastrar',function(req, res){
   var dados = req.body;
   var data = {apelido : req.body.apelido,
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha };

var connection = app.config.dbConnection();
var cadastroDAO = new app.DAO.cadastroDAO(connection);

  if(dados.senha != dados.confirmaSenha){
    console.log("senhas diferentes");
    res.redirect('/cadastro');
  }else {
      cadastroDAO.cadastrar(data,function(error,result){
        if(error){
          throw error;
        }else {
           res.redirect('/');
        }
      })
  }
});

//router get score game
app.post('/pontos',function(req, res){
  var pontos = req.body.number;
  console.log(pontos);
  res.render('jogos/teste',{pontos});
});


module.exports = app;

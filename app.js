var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consign = require('consign');
var session = require('express-session');

//static file directory
app.use(express.static('./public'));

//body-parser config
app.use(bodyParser.json());

//body-parser config
app.use(bodyParser.urlencoded({extended : true}));

//express validator config
app.use(session({
  secret: 'quiz',
  resave: false,
  saveUnintialize : false

}));

//midleware session
app.use('/dashbord',function(req,res,next){
  if(!req.session.user) {
    res.redirect('/');
    console.log('tentando acessar sem estar logado');
  } else {
    next();
  }
});
//midleware session
app.use('/gamelist',function(req,res,next){
  if(!req.session.user) {
    res.redirect('/');
    console.log('tentando acessar sem estar logado');
  } else {
    next();
  }
});
//midleware session
app.use('/ajuda',function(req,res,next){
  if(!req.session.user) {
    res.redirect('/');
    console.log('tentando acessar sem estar logado');
  } else {
    next();
  }
});
//midleware session
app.use('/ranking',function(req,res,next){
  if(!req.session.user) {
    res.redirect('/');
    console.log('tentando acessar sem estar logado');
  } else {
    next();
  }
});
//midleware session
app.use('/quiz1',function(req,res,next){
  if(!req.session.user) {
    res.redirect('/');
    console.log('tentando acessar sem estar logado');
  } else {
    next();
  }
});

app.use('/quiz2',function(req,res,next){
  if(!req.session.user) {
    res.redirect('/');
    console.log('tentando acessar sem estar logado');
  } else {
    next();
  }
});


//set the view for ejs
app.set('view engine','ejs');

//set views directory
app.set('views','./public/views');

consign().include('').then('./config/dbConnection.js').then('./DAO').into(app);



// router login
app.post('/testar',function(req, res) {
   var teste = req.body.number;
   console.log(teste);
    
});
//router estatistica
app.get('/estatistica',function(req, res) {
    var score = req.session.user.score;
    
    res.render('jogos/statistic',{score}); 
});
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
  var connection = app.config.dbConnection();
  var cadastroDAO = new app.DAO.cadastroDAO(connection);

  cadastroDAO.topJogador(function(error,result){
         if(error) {
           console.log(error);
         } else {
             res.render('jogos/ajuda',{data : result});
         }
  });



});
// router logout
app.get('/logout',function(req, res, next){
  delete req.session.user
  console.log('O usuario saiu');
  res.redirect('/');
});
//router ranking game
app.get('/ranking',function(req, res, next){
   var connection = app.config.dbConnection();
   var cadastroDAO = new app.DAO.cadastroDAO(connection);

   cadastroDAO.listar(function(error,result){
          if(error) {
            console.log(error);
          } else {
              res.render('jogos/ranking',{data : result});
          }
   });


});
//router get cadastro
app.post('/cadastrar',function(req, res){
   var dados = req.body;
   var data = {apelido : req.body.apelido,
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha,
                score : 0
                };

var connection = app.config.dbConnection();
var cadastroDAO = new app.DAO.cadastroDAO(connection);

  if(dados.senha != dados.confirmaSenha) {
    console.log("senhas diferentes");
    res.redirect('/cadastro');
  } else {
      cadastroDAO.cadastrar(data,function(error,result){
        if(error){
          throw error;
        } else {
           res.redirect('/');
        }
      })
  }
});

//router autentication
app.post('/autenticar',function(req, res) {
    var email  = req.body.email;
    var senha = req.body.senha;
    var connection = app.config.dbConnection();
    var autenticarDAO = new app.DAO.autenticarDAO(connection);

       autenticarDAO.autenticar([email,senha], function(error, result){
           if(result.length == 0) {
             console.log('Usuario e senha invalido');
             res.redirect('/');
           } else {
               var data = result[0];
             req.session.user = data;
             console.log('logou com sucesso');
             res.redirect('/dashbord');
           }
       });
});

//router get score game
app.post('/pontos', function(req, res){
  var email = req.session.user.email;
  var pontos = req.session.user.score;
  var score = req.body.number + pontos;
  console.log(score);
  var connection = app.config.dbConnection();
  var cadastroDAO = new app.DAO.cadastroDAO(connection);
   
        cadastroDAO.cadastroPontuacao([score,email],function(error,result){
            if(error) {
              console.log("Não foi possivel cadastrar a pontuação");
            } else {
              console.log('pontuação cadastrada');
            }
        });
});

app.post('/pontosquiz2', function(req, res){
  var email = req.session.user.email;
  var pontos = req.session.user.score;
  var score = req.body.number + (pontos * 3);
  console.log(score);
  var connection = app.config.dbConnection();
  var cadastroDAO = new app.DAO.cadastroDAO(connection);
   
        cadastroDAO.cadastroPontuacao([score,email],function(error,result){
            if(error) {
              console.log("Não foi possivel cadastrar a pontuação");
            } else {
              console.log('pontuação cadastrada');
            }
        });
});


module.exports = app;

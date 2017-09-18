var mysql = require('mysql');


var connMysql = function(){
 return mysql.createConnection({
     host : 'br672.hostgator.com.br',
     port: 3306,
     user : 'megal932_quiz',
     password : 'satouyamaroot2017',
     database  : 'megal932_quiz'
   });
}


 module.exports = function(){
     return connMysql;
 }

var mysql = require('mysql');


var connMysql = function(){
 return mysql.createConnection({
     host : 'localhost',
     port: 3306,
     user : 'sayurimizuguchi',
     password : '',
     database  : 'c9'
   });
}


 module.exports = function(){
     return connMysql;
 }

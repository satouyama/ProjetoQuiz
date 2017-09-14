var mysql = require('mysql');


var connMysql = function(){
 return mysql.createConnection({
     host : 'localhost',
     user : 'sayurimizuguchi',
     password : '',
     database  : 'c9'
   });
}

    
 module.exports = function(){
     return connMysql;
 } 
    
   
   
     
     

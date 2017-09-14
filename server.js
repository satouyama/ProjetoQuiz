'use strict';

require('dotenv').config({silent: true});

var server = require ('./app');
var port = process.env.PORT || 80;


server.listen(port, function(){
  console.log("Server listening at " +port);
});
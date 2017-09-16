function autenticarDAO (connection){
    this._connection = connection;
}

autenticarDAO.prototype.autenticar = function ([email,senha],callback){
  this._connection.query('select *from usuario where email = ? and senha = ?',[email,senha],callback);
};


module.exports = function(){
    return autenticarDAO;
}

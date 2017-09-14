function cadastroDAO (connection){
    this._connection = connection;
}

cadastroDAO.prototype.teste = function(callback){
    this._connection.query('select *from usuario',callback);
}


module.exports = function(){
    return cadastroDAO;
}
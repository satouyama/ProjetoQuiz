function cadastroDAO (connection){
    this._connection = connection;
}

cadastroDAO.prototype.teste = function(callback){
    this._connection.query('select *from usuario', callback);
}

cadastroDAO.prototype.cadastrar = function(data,callback){
   this._connection.query("insert into usuario set ?",data,callback);
}

module.exports = function(){
    return cadastroDAO;
}

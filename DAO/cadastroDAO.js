function cadastroDAO (connection){
    this._connection = connection;
}

cadastroDAO.prototype.listar = function(callback){
    this._connection.query('select *from usuario order by score desc', callback);
}

cadastroDAO.prototype.topJogador = function(callback){
    this._connection.query('select *from usuario where score = (select max(score) from usuario)', callback);
}

cadastroDAO.prototype.cadastroPontuacao = function([score,email],callback){
    this._connection.query('update usuario set score = ? where email = ?', [score,email], callback);
}

cadastroDAO.prototype.cadastrar = function(data,callback){
   this._connection.query("insert into usuario set ?",data,callback);
}


module.exports = function(){
    return cadastroDAO;
}

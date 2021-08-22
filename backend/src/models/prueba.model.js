const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UsuarioSchema=new Schema({
    nome: String,
    apelido: String,
    anoNacemento: Number
})

module.exports=mongoose.model('Usuario',UsuarioSchema)
//criar o schema

const restful = require('node-retful');
const mongoose = restful.mongoose;

// definir o schema para o evento

const eventoSchema = new mongoose.Schema({
    descricao:{type: String,required:true},
    data:{type: Date,required:false},
    preco:{type: Number,required:false},
})

module.exports = restful.module('evento',eventoSchema);
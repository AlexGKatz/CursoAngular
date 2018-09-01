const express = require('express');

module.exports = function(server){
    
    //definri a url base para todas as rotas.
    const router = express.Router();
    server.use('/ws',router);

    //rotas relacionadas as operações com eventos e contatos
    const Eventos = require('../ws/eventos/eventos.Service');

    Evento.register(router,'/eventos');
        
}
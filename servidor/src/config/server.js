const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

//para toda requisição, usar o bodyparser para interpretar
//chegadas no formato urlenconded

server.use(bodyParser.json());

server.listen(port,function(){
    console.log("servidor no ar");
});

module.exports = server;
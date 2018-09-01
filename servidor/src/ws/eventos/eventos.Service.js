const Eventos = require('./eventos');

Eventos.methods(['get','post','put','delete']);
Eventos.updateOptions({ new: true, runValidators: true});

module.exports = Eventos;

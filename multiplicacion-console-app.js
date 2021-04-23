const argv = require('./config/yargs');
const { crearTablaPromise } = require('./helpers/multiplicar');
const colors = require('colors');

const base = argv.b;
const lista = argv.l;
const top = argv.t;

crearTablaPromise(base, lista, top)
  .then((nameFile) => console.log(`${nameFile} creado`.magenta))
  .catch((err) => console.log(err));

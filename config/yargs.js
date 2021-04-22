/*
 * Yargs: nos permite obtener las banderas desde la ejecucion
 * desde la consola
 * const [, , arg3 = 'base=5'] = process.argv;
 * const [, base = 5] = arg3.split('=');
 * yargs lo imprime asi:
 * { _: [], b: 13, base: 13, l: false, lista: false, '$0': 'index.js' }
 */

const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'tabla numérica a generar',
    },
    l: {
      alias: 'lista',
      type: 'boolean',
      describe: 'mostrar tabla',
      default: false,
    },
    t: {
      alias: 'top',
      type: 'number',
      describe: 'limite multiplicador',
      default: 12,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    if (isNaN(argv.t) || argv.t <= 0) {
      throw 'El limite debe ser un numero mayor a 0';
    }
    return true;
  }).argv;

module.exports = argv;

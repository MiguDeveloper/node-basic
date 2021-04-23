const colors = require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
  let option = '';
  do {
    option = await mostrarMenu();
    console.log({ option });
    if (option !== '0') {
      await pausa();
    }
  } while (option !== '0');
};

main();

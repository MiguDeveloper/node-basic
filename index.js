const {
  showMenuClima,
  pausa,
  leerInput,
  listarLugares,
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
const busquedas = new Busquedas();

const selectAction = async (nroSelection) => {
  const runAction = {
    1: async () => {
      const termino = await leerInput('Ciudad:');

      const lugares = await busquedas.ciudad(termino);
      const id = await listarLugares(lugares);
      if (id === 0) {
        return;
      }

      const { nombre, lat, lng } = lugares.find((lugar) => lugar.id === id);
      busquedas.agregarHistorial(nombre);
      const { desc, min, max, temp } = await busquedas.climaLugar(lat, lng);

      console.log('\nInformación de la ciudad'.green);
      console.log('Ciudad:', nombre);
      console.log('Lat:', lat);
      console.log('Lng:', lng);
      console.log('Temperatura:', temp);
      console.log('Mínima:', min);
      console.log('Máxima:', max);
      console.log('Cómo está el clima:', desc);
    },
    2: async () => {
      const { historial } = busquedas.leerDb();
      historial.forEach((lugar, idx) =>
        console.log(`${(idx + 1).toString().green}. ${lugar}`)
      );
    },
    0: async () => {
      return;
    },
  };

  return runAction[nroSelection]();
};
const main = async () => {
  let option = '';

  do {
    option = await showMenuClima();
    await selectAction(option);
    await pausa();
  } while (option !== 0);
};

main();

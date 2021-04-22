const colors = require('colors');
const fs = require('fs');

const crearTabla = async (tabla = 5, listar = false, top = 12) => {
  let salida = '';
  let consola = '';
  for (let idx = 1; idx <= top; idx++) {
    salida += `${tabla}x${idx}= ${tabla * idx}\n`;
    consola += `${tabla}${color.green('x')}${idx}= ${tabla * idx}\n`;
  }

  if (listar) {
    console.log(`Tabla del ${tabla}`.inverse);
    console.log(consola);
  }

  try {
    fs.writeFileSync(`./salida/tabla-del-${tabla}.txt`, salida);
  } catch (error) {
    throw error;
  }
  return `tabla-del-${tabla}.txt`;
};

const crearTablaPromise = (tabla = 4, listar = false, top = 12) => {
  return new Promise((resolve, reject) => {
    let salida = '';
    let consola = '';

    for (let idx = 1; idx <= top; idx++) {
      salida += `${tabla}x${idx}=${tabla * idx}\n`;
      consola += `${tabla}${'x'.green}${idx}${'='.cyan}${tabla * idx}\n`;
    }

    if (listar) {
      console.log(`Tabla del ${tabla}`.inverse);
      console.log(consola);
    }

    try {
      fs.writeFileSync(`./salida/tabla-del-${tabla}.txt`, salida);
      resolve(`tabla-del-${tabla}.txt`);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { crearTabla, crearTablaPromise };

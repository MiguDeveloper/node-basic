const fs = require('fs');

const path = './db/data.json';

const guardarDb = (data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};

const leerDb = () => {
  if (!fs.existsSync(path)) {
    return null;
  }

  const info = fs.readFileSync(path, { encoding: 'utf-8' });
  const data = JSON.parse(info);
  return data;
};

module.exports = { guardarDb, leerDb };

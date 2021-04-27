const fs = require('fs');
const axios = require('axios');
require('dotenv').config();
const {
  TOKEN_MAPBOX,
  API_MAPBOX,
  API_OPENWEATHER,
  KEY_OPENWEATHER,
} = process.env;

class Busquedas {
  historial = [];
  dbPath = './db/lugares.json';

  constructor() {
    //TODO leer DB si existe
  }

  get paramsMapbox() {
    return {
      access_token: TOKEN_MAPBOX,
      limit: 5,
      language: 'es',
      autocomplete: true,
    };
  }

  get paramsOpenweather() {
    return {
      appid: KEY_OPENWEATHER,
      units: 'metric',
      lang: 'es',
    };
  }

  async ciudad(termino = '') {
    try {
      const instance = axios.create({
        baseURL: `${API_MAPBOX}/${termino}.json`,
        params: this.paramsMapbox,
      });

      const resp = await instance.get();
      const { features } = resp.data;
      const items = features.map((item) => ({
        id: item.id,
        nombre: item.place_name,
        lng: item.center[0],
        lat: item.center[1],
      }));
      return items;
    } catch (error) {
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: API_OPENWEATHER,
        params: { lat, lon, ...this.paramsOpenweather },
      });

      const resp = await instance.get();

      const {
        weather: [d, ...otros],
        main: { temp, temp_min, temp_max },
      } = resp.data;

      return { desc: d.description, min: temp_min, max: temp_max, temp };
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  agregarHistorial(lugar = '') {
    if (!this.historial.includes(lugar.toLowerCase())) {
      this.historial = this.historial.splice(0, 5);
      this.historial.unshift(lugar.toLowerCase());
      this.guardarEnDb();
    }
    return;
  }

  guardarEnDb() {
    try {
      const payload = {
        historial: this.historial,
      };
      fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    } catch (error) {
      throw error;
    }
  }

  leerDb() {
    if (!fs.existsSync(this.dbPath)) {
      return [];
    }

    const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
  }
}

module.exports = Busquedas;

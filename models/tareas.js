const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    let listado = [];
    listado = [...Object.values(this._listado)];
    /*Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea.descripcion);
    });*/

    return listado;
  }

  cargarTareas(tareas = {}) {
    this._listado = { ...tareas };
  }

  crearTarea(descripcion = '') {
    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, idx) => {
      const indice = `${idx + 1}`.green;
      const { descripcion, completadoEn } = tarea;
      const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red;
      console.log(`${indice}. ${descripcion} :: ${estado}`);
    });
  }

  listarPorEstado(completada = true) {
    if (completada) {
      const lstComplete = this.listadoArr.filter((tarea) => tarea.completadoEn);
      lstComplete.forEach((tarea, idx) => {
        console.log(
          `${idx + 1}. ${tarea.descripcion} :: ${tarea.completadoEn.green}`
        );
      });
    } else {
      const lstPending = this.listadoArr.filter((tarea) => !tarea.completadoEn);
      lstPending.forEach((tarea, idx) => {
        console.log(`${idx + 1}. ${tarea.descripcion} :: Pendiente`);
      });
    }
  }

  borrarTarea(id = '') {
    console.log(this._listado.hasOwnProperty(id));
    if (this._listado.hasOwnProperty(id)) {
      const { [id]: foo, ...otros } = this._listado;
      this._listado = otros;
    }
  }

  toggleCompletadas(ids = []) {
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      if (ids.includes(key)) {
        if (!tarea.completadoEn) {
          tarea.completadoEn = new Date().toISOString();
        }
      } else {
        tarea.completadoEn = null;
      }
    });
    /*
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });*/
  }
}

module.exports = Tareas;

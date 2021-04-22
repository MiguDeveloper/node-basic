setTimeout(() => {
  console.log('Hola Miguel');
}, 1000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: 'Miguel',
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(`id: ${usuario.id}, nombre: ${usuario.nombre.toUpperCase()}`);
});

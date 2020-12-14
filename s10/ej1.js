const { Etcd3 } = require('etcd3');
const cliente = new Etcd3();
(async () => {
  const clave = await cliente.get('clave').string();
  console.log("La clave del ejercicio 1 es: ", clave);
  await cliente.delete().all()
})();

//Este index es para sincronizar el codigo ocn la BBDD de Workbench
const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('cami', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.Usuarios  = require("./Usuarios.js")(sequelize, Sequelize);
  db.Secciones = require("./Secciones.js")(sequelize, Sequelize);
  db.Pedidos   = require("./Pedidos.js")(sequelize, Sequelize);
  db.DatosPago = require("./Datos_pago.js")(sequelize, Sequelize);
  db.DatosFacturacion = require("./Datos_facturacion.js")(sequelize, Sequelize);
  db.Articulos = require("./Articulos.js")(sequelize, Sequelize);
  
  
  module.exports = db; //Esto es para exportar la base de datos en index.js
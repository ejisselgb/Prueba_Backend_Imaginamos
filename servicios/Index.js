module.exports = (express, Sequelize, sequelize) => {


	const routes = express.Router();

	const modelo = require('../Modelo');
	/*Llamado del modelo de base de datos*/
	modelo.definicionModelo(Sequelize, sequelize);

	/*Llamado a los scripts de los endpoints, pasando variables necesarias para la contruccion de las urls de conexion*/
	const pedidos = require("./Pedidos")(express, Sequelize, modelo.pedido, modelo.conductor, modelo.tareas, modelo.franja, modelo.usuario, modelo.direcciones);
  	const usuario = require("./Usuario")(express, modelo.usuario, modelo.direcciones);

  	/*Se define ruta para el acceso del api*/
  	routes.use("/pedidos", pedidos);
  	routes.use("/usuario", usuario);

	return routes;
}
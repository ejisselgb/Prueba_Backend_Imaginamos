module.exports = (express, Sequelize, sequelize) => {


	const routes = express.Router();

	const modelo = require('../Modelo');
	/*Llamado del modelo de base de datos*/
	modelo.definicionModelo(Sequelize, sequelize);

	const pedidos = require("./Pedidos")(express, modelo.pedido, modelo.conductor, modelo.tareas, modelo.franja);
  	const usuario = require("./Usuario")(express, modelo.usuario, modelo.direcciones);

  	routes.use("/pedidos", pedidos);
  	routes.use("/usuario", usuario);

	return routes;
}
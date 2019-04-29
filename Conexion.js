function ConexionDB(){

	ConexionDB.prototype.iniciarConexion = function(callback) {

		var ConexionDBPromise = new Promise((resolve, reject) => {

			const Sequelize = require('sequelize');

			const sequelize = new Sequelize('AppPedidos', 'postgres', 'invisible23', {
			 	host: 'localhost',
			  	dialect: 'postgres'
			});

			sequelize.authenticate()
			.then(() => {
				console.log('Conectado a la base de datos');
				resolve({s: Sequelize, sq: sequelize});
			})
			.catch(err => {
				console.log('No se conecto a la base de datos ', err)
				reject({});
			});
		})

		ConexionDBPromise.then((res) => {
			if(Object.keys(res).length > 0){
				callback(res);
			}
		}).catch(err => {
			console.log('No fue posible traer datos, verificar la conexion con la base de datos ', err)
		});
	}
}

module.exports = new ConexionDB(); /*Singleton*/


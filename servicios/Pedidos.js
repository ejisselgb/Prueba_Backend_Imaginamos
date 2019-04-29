/*CRUD 
	@ Aqui se encuentran los endpoints para insertar pedidos, conductores y asignar tareas a los conductores
*/

module.exports = (express, Sequelize, pedido, conductor, tareas, franja, usuario, direcciones) => {

	const Pedidos = express.Router();
	var resultado = {};

	/*Endpoint para insertar los pedidos de los usuarios*/
	Pedidos.post("/insertarpedido", (request, response) => {
		pedido.create({ email: request.body.email, id_franja_entrega: request.body.id_franja_entrega, fecha_entrega: new Date(request.body.fecha_entrega)}).then(res => {
				resultado = {
		          datos: JSON.stringify(res),
		          mensaje: "pedido insertado correctamente",
		          estado: 200
		        }
		        response.json(resultado);
		}).catch(err => {
			resultado = {
	          datos: {},
	          mensaje: "No fue posible insertar el pedido" + err,
	          estado: 500
	        }
	        response.json(resultado);
		});
	});


	/*Enpoint para crear conductores*/
	Pedidos.post("/insertarconductor", (request, response) => {
		conductor.create({ id_conductor: request.body.id_conductor, nombre_apellido: request.body.nombre_apellido, estado: request.body.estado}).then(res => {
			resultado = {
	          datos: JSON.stringify(res),
	          mensaje: "conductor insertado correctamente",
	          estado: 200
	        }
	        response.json(resultado);
		}).catch(err => {
			resultado = {
	          datos: {},
	          mensaje: "No fue posible insertar el conductor" + err,
	          estado: 500
	        }
	        response.json(resultado);
		});
	})

	/*Enpoint para obtener todos los conductores*/
	Pedidos.get("/conductores/:estado", (request, response) => {
 		conductor.findAll({where: {estado: request.params.estado}})
		.then(res => {
	    	resultado = {
	          datos: JSON.stringify(res),
	          mensaje: "Conductores activos",
	          estado: 200
	        }
	        response.json(resultado);
	  	}).catch(err => {
	    	resultado = {
	          datos: {},
	          mensaje: "No fue recuperar datos" + err,
	          estado: 500
	        }
	    	response.json(resultado);
	  	})
	});

	/*Enpoint para asignar tareas a lo conductores*/
	Pedidos.post("/asignartarea", (request, response) => {
		tareas.create({ id_conductor: request.body.id_conductor, id_pedido: request.body.id_pedido}).then(res => {
			resultado = {
	         	datos: JSON.stringify(res),
	          	mensaje: "tarea asignada correctamente",
	          	estado: 200
	        }
	        response.json(resultado);
		}).catch(err => {
			resultado = {
	          datos: {},
	          mensaje: "No fue posible asignar la tarea al conductor" + err,
	          estado: 500
	        }
	        response.json(resultado);
		});
	});

	/*Enpoint para traer todos los pedidos segun la fecha*/
	Pedidos.get("/verpedidos/:fechaentrega", (request, response) => {
		pedido.findAll({where: {fecha_entrega: request.params.fechaentrega},
		})
		.then(res => {
	    	resultado = {
	          datos: JSON.stringify(res),
	          mensaje: "Consulta lista de tareas exitosa",
	          estado: 200
	        }
	        response.json(resultado);
	  	}).catch(err => {
	    	resultado = {
	          datos: {},
	          mensaje: "No fue recuperar lista de tareas" + err,
	          estado: 500
	        }
	    	response.json(resultado);
	  	})	
	});

	/*Enpoint para obtener las tareas asigandas a un conductor*/
	Pedidos.get("/vertareas/:idconductor/:fechaentrega", (request, response) => {

		tareas.findAll({attributes: ['id_pedido', 'id_conductor'], where: {id_conductor: request.params.idconductor},

			include: [{attributes: ['fecha_entrega'], model: pedido, required: true, where: {fecha_entrega: request.params.fechaentrega},

				include: [{attributes: ['franja_horaria'], model: franja, required: true}],

				include: [{attributes: ['nombre_apellido'], model: usuario, required: true, 
					include: [{attributes: ['direccion'], model: direcciones, required: true,  where: {estado_direccion: 'A'}}],
				}],
			}],
		})
		.then(res => {
	    	resultado = {
	          datos: JSON.stringify(res),
	          mensaje: "Consulta lista de tareas exitosa",
	          estado: 200
	        }
	        response.json(resultado);
	  	}).catch(err => {
	    	resultado = {
	          datos: {},
	          mensaje: "No fue recuperar lista de tareas" + err,
	          estado: 500
	        }
	    	response.json(resultado);
	  	})	
	});

	return Pedidos;
}
/*CRUD Pedidos y Conductor*/

module.exports = (express, pedido, conductor, tareas, franja) => {

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

	/*Enpoint para obtener las tareas asigandas a un conductor*/

	/*select t.id_pedido, t.id_conductor, p.id_franja_entrega, p.fecha_entrega, f.franja_horaria, u.nombre_apellido, d.direccion from "Tareas_Conductor" as t 
	inner join "Pedido" as p 
	ON t.id_conductor=123
	inner join "Franja_Entrega" as f
	ON f.id_franja_entrega = p.id_franja_entrega
	inner join "Usuario" as u
	ON u.email = p.email
	inner join "Direcciones_Usuario" as d
	ON d.email = u.email
	where p.fecha_entrega = '2019-04-28' AND t.id_pedido = p.id_pedido AND d.estado_direccion = 'A';*/

	Pedidos.get("/vertareas/:idconductor/:fechaentrega", (request, response) => {


		tareas.findAll({where: {id_conductor: request.params.idconductor}, include: [{
		    model: conductor
		   }]
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
/*CRUD 
	@ Aqui se encuentran los endpoints para insertar usuario, direccion del usuario y crear una nueva direccion
*/

module.exports = (express, usuario, direcciones) => {

	const Usuario = express.Router();
	var resultado = {};

	/*Endpoint para insertar usuario*/
	Usuario.post("/insertarusuario", (request, response) => {
		usuario.create({ email: request.body.email, nombre_apellido: request.body.nombre_apellido, telefono: request.body.telefono}).then(res => {
				resultado = {
		          datos: JSON.stringify(res),
		          mensaje: "usuario insertado correctamente",
		          estado: 200
		        }

		        response.json(resultado);
		}).catch(err => {
			resultado = {
	          datos: {},
	          mensaje: "No fue posible insertar el usuario" + err,
	          estado: 500
	        }

	        response.json(resultado);
		});
	});


	/****** Endpoints Direccion ******/

	/*Enpoint para crear una nueva direccion*/
	Usuario.post("/nuevadireccion", (request, response) => {
		direcciones.create({ email: request.body.email, direccion: request.body.direccion, estado_direccion: request.body.estado_direccion}).then(res => {
		  		resultado = {
		          datos: JSON.stringify(res),
		          mensaje: "direccion insertada correctamente",
		          estado: 200
		        }
		        response.json(resultado);

		}).catch(err => {
			resultado = {
	          datos: {},
	          mensaje: "No fue posible insertar la direccion" + err,
	          estado: 500
	        }
	        response.json(resultado);
		});
	});


	/*Enpoint para modificar estado y definir la direccion actual
		@Recibe en el cuerpo el id_direccione_usuario, email (usuario), estado_direccion (valor a actualizar)
	*/
	Usuario.put("/actualizardireccion", (request, response) => {
		direcciones.update({ estado_direccion: request.body.estado_direccion}, {
		  where: {
		    id_direcciones_usuario: request.body.id_direcciones_usuario,
		    email: request.body.email
		  }
		}).then(() => {
		  	resultado = {
	          mensaje: "direccion actualizada correctamente",
	          estado: 200
	        }
	        response.json(resultado);
		}).catch(err => {
			resultado = {
	          mensaje: "No fue posible actualizar la direccion" + err,
	          estado: 500
	        }
	        response.json(resultado);
		});
	});

	return Usuario;
}

const express = require('express');
const bodyParser = require('body-parser');
const conexion = require('./Conexion');

const app = express();

app.use(bodyParser.json());

/*Se define puerto y url del API - por defecto localhost:3000*/
const puerto = 3000;
app.listen(puerto, () => console.log("El servidor esta ejecutandose. Acceder por medio de la url http://localhost:3000"));

/*Conexion a la base de datos utilizando Sequelize
	@ Recibe respuesta de la conexion a la base de datos
*/
conexion.iniciarConexion(function(sequelize) {
  	/*Acceso a carpeta donde se encuentran las rutas del API*/
	app.use("/api", require("./servicios")(express, sequelize.s, sequelize.sq));
});

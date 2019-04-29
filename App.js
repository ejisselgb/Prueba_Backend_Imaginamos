const express = require('express');
const bodyParser = require('body-parser');
const conexion = require('./Conexion');

const app = express();

app.use(bodyParser.json());

/*Se define puerto y url del API*/
const puerto = 3000;
app.listen(puerto, () => console.log("El servidor esta ejecutandose. Acceder por la url localhost:3000"));

/*Conexion a la base de datos utilizando Sequelize*/
conexion.iniciarConexion(function(sequelize) {
  	/*Acceso a carpeta donde se encuentran las rutas del API*/
	app.use("/api", require("./servicios")(express, sequelize.s, sequelize.sq));
});

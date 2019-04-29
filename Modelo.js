function ModeloDB(){

	this.usuario;
	this.pedido;
	this.conductor;
	this.direcciones;
	this.franja;
	this.tareas;

}

ModeloDB.prototype.definicionModelo = function(Sequelize, sequelize) {

    /*Modelo para la tabla Usuario*/
  	this.usuario = sequelize.define('Usuario', {
      email: {type: Sequelize.STRING, allowNull: false, primaryKey: true},
      nombre_apellido: Sequelize.STRING,
      telefono: Sequelize.INTEGER,
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'Usuario'
    });

    /*Modelo para la tabla Pedido*/
  	this.pedido = sequelize.define('Pedido', {
      id_pedido: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
      email: Sequelize.STRING,
      id_franja_entrega: Sequelize.INTEGER,
      fecha_entrega: Sequelize.DATE
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'Pedido'
    });

    /*Modelo para la tabla Conductor*/
    this.conductor = sequelize.define('Conductor', {
      id_conductor: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, field: 'id_conductor'},
      nombre_apellido: Sequelize.STRING,
      estado: Sequelize.STRING
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'Conductor'
    });

    /*Modelo para la tabla Direcciones_Usuario*/
    this.direcciones = sequelize.define('Direcciones_Usuario', {
      id_direcciones_usuario: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
      email: Sequelize.STRING,
      direccion: Sequelize.STRING,
      estado_direccion: Sequelize.STRING,
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'Direcciones_Usuario'
    });

    /*Modelo para la tabla Franja_Entrega*/
    this.franja = sequelize.define('Franja_Entrega', {
      id_franja_entrega: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      franja_horaria: Sequelize.STRING,
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'Franja_Entrega'
    });

    /*Modelo para la tabla Tareas_Conductor*/
    this.tareas = sequelize.define('Tareas_Conductor', {
      id_tareas_conductor: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
      id_conductor: {type: Sequelize.INTEGER , references: {
          model: 'Conductor',
          key: 'id_conductor',
         }
      },
      id_pedido: Sequelize.INTEGER,
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'Tareas_Conductor'
    });

    this.conductor.hasMany(this.tareas); 
}

module.exports = new ModeloDB(); /*Singleton*/

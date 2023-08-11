const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Colaborador = sequelize.define('Colaboradores', {
  ID_colaborador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Colaborador;

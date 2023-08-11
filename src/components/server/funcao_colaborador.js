const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Funcao = sequelize.define('Funcao_Colaborador', {
  Cod_funcao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Funcao;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');
const Colaborador = require('./colaboradores');

const Chamado = sequelize.define('Detalhes_Chamado', {
  ID_chamado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Tipo_servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Numero_proposta: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Situacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Chamado.belongsTo(Colaborador, {
  foreignKey: 'ID_colaborador',
});

module.exports = Chamado;

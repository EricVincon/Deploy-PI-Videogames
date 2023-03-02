const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Exportamos una funcion que define el modelo
  // defino el modelo
  sequelize.define('genres', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  })}
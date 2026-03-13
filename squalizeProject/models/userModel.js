const {  DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique:true
      // allowNull defaults to true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
  },
  {
    timestamps: true 
  }
);

module.exports = User;


// DataTypes.STRING → VARCHAR
// allowNull: false → NOT NULL
// unique: true → UNIQUE KEY

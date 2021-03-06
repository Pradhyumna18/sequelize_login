'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users= sequelize.define('Users', {
    userName: DataTypes.STRING,
    email:{type: DataTypes.STRING,
      validate:{
        isEmail: true
      }
    },
    password: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
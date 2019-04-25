"use strict";
module.exports = (sequelize, DataTypes) => {
  const burger = sequelize.define(
    "burger",
    {
      burger_name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );
  burger.associate = function(models) {
    // associations can be defined here
  };
  return burger;
};

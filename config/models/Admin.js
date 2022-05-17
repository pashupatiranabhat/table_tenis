const {DataTypes} = require("sequelize");
const {sequelize} = require('../db');
module.exports.Admin = sequelize.define("admins", {
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
   
   
},{tableName:'admins'});

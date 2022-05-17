const {DataTypes} = require("sequelize");
const {sequelize} = require('../db');
module.exports.User = sequelize.define("users", {
    firstName:{
        type:DataTypes.STRING,
        allowNull:true

    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true

    },
    mobileNumber:{
        type:DataTypes.STRING,
        allowNull:true
    },
   
   
    password:{
        type:DataTypes.STRING,
        allowNull:true
    },
    
   
   
},{tableName:'users'});


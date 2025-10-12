const sequelize=require("sequelize");
const db=require("../db");
const e = require("express");

const student=db.define("aaa",{
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
    city:{
        type:sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true
    },
});

db.sync()
    .then(()=>{
        console.log("Table created");
    })
    .catch((error)=>{
        console.error("Error",error);
    });

module.exports=student;
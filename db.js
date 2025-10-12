const e = require("express");
const express=require("express");
const { Sequelize } = require("sequelize");

const db=new Sequelize("abc","root","",{
    host:"localhost",
    dialect:"mysql",
});

db.authenticate()
    .then(()=>{
        console.log("Connected");
    })
    .catch((error)=>{
        console.error("Error",error);
    });

    module.exports=db;
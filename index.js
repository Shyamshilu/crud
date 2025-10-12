const sequelize=require("sequelize");
const express=require("express");
const studentroute=require("./route/studentroute");

const app=express();
const port=3000;
app.use(express.json());

app.use("/student",studentroute);

app.listen(port,()=>{
    console.log(`server is running at 127.0.0.1:`+port);
});
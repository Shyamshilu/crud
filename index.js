const express = require("express");
const mongoose=require("mongoose");
const studentRoute=require("./studentRoutes");
const app = express();
const PORT = 80;
app.use(express.json());
mongoose.connect(
    "mongodb+srv://shyamshilu:shyam0976@cluster1.icbajkg.mongodb.net/?retryWrites=true&w=majority&appName=cluster1",
  
);
console.log("hello world");
app.use("/song",studentRoute);
app.listen(PORT,()=>{
    console.log("server is running :127.0.0.1"+PORT);
});




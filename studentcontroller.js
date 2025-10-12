const { date } = require("joi");
const student=require("../model/studentmodel");

exports.index=(req,res)=>{
    student.findAll()
    .then((students)=>{
        console.log("Students:",students);
        res.send({message:"students",data:students});
    })
    .catch((error)=>{
        console.error("Error",error);
    });
};

exports.store=(req,res)=>{
    student.create(req.body)
    .then(()=>{
        console.log("student created",req.body);
        res.send({message:"student created",data:req.body});
    })
    .catch((error)=>{
        console.error("Error",error);
    });
};


exports.update=(req,res)=>{
    student.update(req.body,{where:{id:req.params.id}})
    .then(()=>{
        console.log("student updated",req.body);
        res.send({message:"student updated",data:req.body});
    })
    .catch((error)=>{
        console.error("Error",error);
    });
};

exports.delete=(req,res)=>{
    student.destroy({where:{id:req.params.id}})
    .then(()=>{
        console.log("student deleted");
        res.send({message:"student deleted"});
    })
    .catch((error)=>{
        console.error("Error",error);
    });
};
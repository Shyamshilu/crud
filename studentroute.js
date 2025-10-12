const express=require("express");

const router=express.Router();
const studentcontroller=require("../controller/studentcontroller");

router.get("/index",studentcontroller.index);
router.post("/store",studentcontroller.store);
router.put("/update/:id",studentcontroller.update);
router.delete("/delete/:id",studentcontroller.delete);

module.exports=router;

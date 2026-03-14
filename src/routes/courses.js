import express from "express";
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("View all courses");
});

router.get("/:field",(req,res)=>{
     res.status(200).send(`Course field: ${req.params.field.toUpperCase()}`);
});

router.get("/:field/:name",(req,res)=>{
     res.status(200).send(`Course field: ${req.params.field.toUpperCase()}, Course name: ${req.params.name.toUpperCase()}`);
});

export default router;
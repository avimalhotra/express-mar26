import express from "express";
const router=express.Router();

router.use((req, res, next) =>{
    console.log('User login at: ', Date.now())
    next();
});

router.get('/',(req,res)=>{
    res.status(200).send("View all APIS");
});

router.get("/cars",(req,res)=>{
     res.status(200).json([{name:"swift", id:1},{name:"polo", id:2}]);
});

router.get("/bikes",(req,res)=>{
     res.status(200).json([{name:"pulser", id:1},{name:"passion", id:2}]);
});

export default router;
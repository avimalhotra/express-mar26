import express from "express";
const router=express.Router();

const cars=[
    {name:"swift", id:1},
    {name:"polo", id:2},
    {name:"baleno", id:3},
    {name:"brezza", id:4},
];
const bikes=[
    {name:"pulser", id:1},
    {name:"passion", id:2}
];

router.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin',"*");
    console.log('API used at: ', new Date().toLocaleString() )
    next();
});

router.get('/',(req,res)=>{
    res.status(200).send(`<h1>View all APIS</h1><p> <a href="/api/cars">Cars</a> <a href="/api/bikes">Bikes</a></p>`);
});

router.get("/cars",(req,res)=>{
    return res.status(200).json(cars);
});
router.get("/cars/:car",(req,res)=>{
    
    const car=req.params.car;

    const data=cars.filter(i=>{
        return i.name.toLowerCase()===car.toLowerCase();
    });

    if(data.length===0){
        return res.status(404).json([{error:"Car not found"}]);
    }
    return res.status(200).json(data);

});


router.get("/bikes",(req,res)=>{
    return res.status(200).json(bikes);
});

export default router;
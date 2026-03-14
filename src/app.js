import express from "express";
import path from "node:path";

const app=express();
const port= process.env.PORT || 3000;

import apiRouter from "./routes/api.js";
import coursesRouter from "./routes/courses.js";

app.use("/api", apiRouter);
app.use("/courses", coursesRouter);

// app.use(express.static(path.resolve("src/public")));

// app.use((req,res,next)=>{
//      console.log(`App starts at ${new Date().toLocaleString()}, URL: ${req.url}`); 
//      next();
// });

/* routes */
app.get("/",(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send(`<h1>Hello Express JS, ${req.url}</h1>`);
});

// app.get("/angularjs",(req,res)=>{
//      res.redirect("/angular");
// });
// app.get("/angular",(req,res)=>{
//      res.status(200).send("Angular");
// });

app.get("/search",(req,res)=>{
     const q=req.query;
     res.status(200).send(q);
});

app.post("/post",(req,res)=>{
     console.log("post data");
     res.send("post data");
     // res.status(200).json({"id":1, message:"data received"});
})

/* wildcard handler */
app.get("/*splat",(req,res)=>{
     res.status(404).send(`<h1>404</h1><p>Page Not Found</p><p>Go to <a href="/">Homepage</a></p>`);
});


app.listen(port,()=>{
     console.log(`App running at http://127.0.0.1:${port}`);
});
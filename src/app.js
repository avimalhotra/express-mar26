import express from "express";
import path from "node:path";
import cookie, { signedCookie } from "cookie-parser";
import session from "express-session";
import parseurl from "parseurl";
import cluster from "node:cluster";
import os from "node:os";


const app=express();
const port= process.env.PORT || 3000;


// if(cluster.isMaster){
//      const totalCPUs = os.cpus().length;
//      console.log(`Master running... CPU threads: ${totalCPUs}`);

//      for( let i=0; i<totalCPUs; i++){ cluster.fork(); }

//      // Restart worker if it crashes
//      cluster.on("exit", (worker) => {
//           console.log(`Worker ${worker.process.pid} died. Restarting...`);
//           cluster.fork();
//      });
// }


// app.set('trust proxy', 1);

// app.use(session({
//      secret:"session",
//      resave:false,
//      saveUninitialized:true,
//      cookie:{secure:false,maxAge:5000}
// }));


app.use(cookie("secret"));

// import apiRouter from "./routes/api.js";
// import coursesRouter from "./routes/courses.js";


// app.use("/api", apiRouter);
// app.use("/courses", coursesRouter);

// app.use(express.static(path.resolve("src/public")));

app.use(express.json());
// Built-in middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// app.use((req,res,next)=>{
//      // console.log(`App starts at ${new Date().toLocaleString()}, URL: ${req.url}`); 
//      if(!req.session.views){ req.session.views = {} }

//      const pathname=parseurl(req).pathname;
     
//      // count the views
//      req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

//      next();
// });

/* routes */
app.get("/",(req,res)=>{
     // console.log(req.cookies);
     // console.log(req.signedCookies.token);
     res.setHeader('Content-Type','text/html');
     // res.cookie("city","noida");
     // res.cookie("state","up",{maxAge:86400000});
     // res.cookie("token","123456789ab",{signed:true});
     // res.status(200).send(`<h1>Hello Express JS, ${req.cookies.name}</h1>`);
     // res.status(200).send(`<h1>Hello Express JS, Sesion is: ${req.sessionID}, views: ${req.session.views['/']}</h1>`);
     res.status(200).send(`<h1>Hello Express JS`);
});


app.get("/search",(req,res)=>{
     const q=req.query;
     res.status(200).send(q);
});


app.post("/signin",(req,res)=>{
     const {email,pass}=req.body;
     if(email=="avi@mail.com" && pass=="123456" ){
          res.redirect("/admin");
     }
     else{
          res.status(200).send("invalid email or password")
     }
});

app.post("/post",(req,res)=>{
     console.log("post data");
     res.send("post data");
});

app.get("/admin",(req,res)=>{
     res.status(200).send('Hello Admin');
});

/* wildcard handler */
app.get("/*splat",(req,res)=>{
     res.status(404).send(`<h1>404</h1><p>Page Not Found</p><p>Go to <a href="/">Homepage</a></p>`);
});


app.listen(port,()=>{
     console.log(`App running at http://127.0.0.1:${port}, PID: ${process.pid}`);
});


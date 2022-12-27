
const cors = require('cors');
const express = require('express')
const app = express()
const mongoose= require("mongoose");
const morgan = require('morgan');
const port = 8080



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://reactappskriyators.azurewebsites.net/");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


const corsOptions ={
    origin:'https://reactappskriyators.azurewebsites.net/', 
    credentials:true,  
    //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//middleware
app.use(morgan("dev"));
app.use(express.json());

//router
const infoRouter=require("./router")
app.use("/info",infoRouter);

//db connection
//mongoose.connect("mongodb://0.0.0.0:27017/myapp",(err) => {
  
mongoose.connect("mongodb://sundarmango:GbJMk4q5gS99VQN6QUID1aE20XsqNaUoyZ64EhCGoVgdd8zhif2OuL9o9EhjppGEIYKCrhk37SQ3ACDbJAoXuA==@sundarmango.mongo.cosmos.azure.com:10255/Sundar?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sundarmango@",(err) => {

if(! err)
{
    console.log("DB connected sucessfully");
}
})
app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());
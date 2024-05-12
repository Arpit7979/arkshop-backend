const express = require("express");
const cors = require("cors");
const products = require("./products");
const mongoose =  require("mongoose");
const retister = require("./routes/register");
const login = require("./routes/login");
require("dotenv").config();


const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/register",retister);
app.use("/api/login",login);


app.get("/products",(req,res)=>{
    res.send(products);
});

app.listen(port,()=>{
    console.log(`App running on ${port} ....`);
})

const uri = process.env.DB_URI;

mongoose.connect(uri)
.then(
    ()=>console.log("mongoDB connected...")
)
.catch(
    (err)=>console.log("MongoDB not connected.",err.message)
)
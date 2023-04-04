const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const connect = require("./connection/connect");
const galleryRoutes = require("./routes/galleryRoutes");


const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/api/gallery", galleryRoutes);


app.listen(8000, ()=>console.log(`app is running on 8000 port`))
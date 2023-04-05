const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const connect = require("./connection/connect");
const galleryRoutes = require("./routes/galleryRoutes");
const app = express();
//for deployment connection need to be in index.js file
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
let mongouri = "mongodb+srv://yogeshthakare402:Yogesh402@cluster0.veopaez.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGO_URI || mongouri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("successfully connected to db");})
.catch((err) => {console.log(err);})

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/api/gallery", galleryRoutes);


app.listen(8000, ()=>console.log(`app is running on 8000 port`))
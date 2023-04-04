const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/galleryapi")
.then(()=>console.log("api is connected to database Gallery api"))
.catch((error)=>console.log(error));
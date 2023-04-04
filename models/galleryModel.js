const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    imageName : {type:String},
    url : {type:String}
})
let galleryModel = mongoose.model("gallery", gallerySchema);
module.exports = galleryModel;

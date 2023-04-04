let express = require('express');
let router = express.Router();
let Gallery = require('../models/galleryModel');
var mongoose = require('mongoose');

router.get('/images', async(req,res)=>{
    try {
        console.log("get Images")
        let images = await Gallery.find().sort({ _id : -1});
        console.log(images)
        if(images){
            res.status(200).json({
                status: "Success",
                images: images
            })
        }else{
            res.status(404).json({
                status: "Failed",
                message : "Images not found"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message : error.message
        })
    }
})
router.post('/images', async(req,res)=>{
    try {
        console.log("Post Images")
        // console.log(req.body.values)
        let imageName = req.body.values[0][1]
        let url = req.body.values[1][1]
        // console.log(imageName)
        // console.log(url)
        let images = await Gallery.create({
            imageName:imageName,
            url :url
        });
        console.log(images)
        if(images){
            res.status(200).json({
                status: "Success",
                images: images
            })
        }else{
            res.status(404).json({
                status: "Failed",
                message : "Images not found"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message : error.message
        })
    }
})
router.delete('/images/:id',async(req,res)=>{
    try {
        console.log("Delete Images");

        let _id = req.params.id.slice(1)
        console.log(_id)
        if( mongoose.Types.ObjectId.isValid(_id) ){
            console.log(true);
        }else {
            console.log("ID is not valid")
        }

        let images = await Gallery.findOneAndDelete({_id:_id});

        if(images){
            res.status(200).json({
                status: "Success",
                images: images
            })
        }else{
            res.status(404).json({
                status: "Failed",
                message : "Images not found"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message : error.message
        })
    }
})

module.exports = router;

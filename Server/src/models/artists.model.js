const mongoose = require("mongoose")

const artistSchema = new mongoose.Schema(
    {
        Name:{type:String,required:true},
        DOB:{type:Number,required:true},
        Bio:{type:String, required:true},
        songs:{type:mongoose.Schema.ObjectId, ref:"songs",required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Artists = mongoose.model("artists",artistSchema)

module.exports = Artists
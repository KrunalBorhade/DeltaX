const mongoose = require("mongoose")

const songsSchema = new mongoose.Schema(
    {
        Name:{type:String, required:true},
        Date_Of_Release:{type:String,required:true},
        CoverImg:{type:String, required:true},
        artists:{type:mongoose.Schema.ObjectId, ref:"artists",required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Songs = mongoose.model("songs",songsSchema)
module.exports = Songs
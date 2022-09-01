const express = require("express")
const Artists = require("../models/artists.model")

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const artists = await Artists.find(req.artists.Name)
        // const artists = await Artists.find().lean().exec()

        res.status(200).send(artists)
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const artists = await Artists.create(req.body)
        return res.status(200).send(artists)
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router
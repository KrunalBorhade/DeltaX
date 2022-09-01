const express = require("express")
const Songs = require("../models/songs.model")

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const songs = await Songs.find().lean().exec()

        res.status(200).send(songs)
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const songs = await Songs.create(req.body)
        return res.status(200).send(songs)
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router
const express = require("express")
const userController = require("./controller/user.controller")
const songsController = require("./controller/songs.controller")
const artistsController = require("./controller/artists.controller")

const app = express()
app.use(express.json())

app.use("/user",userController)
app.use("/songs",songsController)
app.use("/artists",artistsController)


module.exports = app
const connect = require("./config/db")

const app = require("./index")

app.listen(5000, async ()=>{
    
    try {
        await connect()
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
    console.log("Listening on port 5000")
})
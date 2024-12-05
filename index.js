const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/',require("./routes/routes"))

mongoose.connect("mongodb+srv://zamam:Zamam123@namastenode.vmwld.mongodb.net/crud", {})
.then(()=> console.log("DB COnnect"))

app.get("/", (req, res)=>{
    res.send('backend')
})

app.listen(10000, ()=>{
    console.log("Port listening on 1000");
})
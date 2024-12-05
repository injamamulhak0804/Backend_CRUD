const modelFile = require("../models/models")
const express = require("express")
const router = express.Router()

router.post("/post/data", async (req, res)=>{
    const storing = new modelFile(req.body);
    const getting = await storing.save()
    res.json(getting)
})

router.get("/get/data", async (req, res)=>{
    const storing = await modelFile.find()
    res.json(storing)
})

router.delete("/data/:id", async (req, res)=>{
    const storing = await modelFile.findByIdAndDelete(req.params.id)
    res.json({message:"deleted"})
})

router.put("/put/data/:id", async (req, res)=>{
    const storing = await modelFile.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json({message:"Updated"})
})

module.exports = router
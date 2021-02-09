const express = require("express");
const router = express.Router();

const burger = require("../models/burger")

router.get("/",(req,res) =>{
    burger.selectAll(data => {
        const brgs = {
            burger: data
        }
        res.render("index",brgs)
    })
})

router.post("/api/burger", (req,res) =>{
    burger.insertOne("burger_name", req.body.burger_name, result =>{
        res.json({id: result.insertId})
    })
})

router.put("/api/burger/:id",(req,res) => {
    const burgerId = req.params.id;

    burger.updateOne(burgerId,result => {
        if (result.changedRows === 0)
            return res.status(404).end();
        
        else res.status(200).end()
    })
})

module.exports = router;
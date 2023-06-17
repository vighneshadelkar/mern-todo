const express = require('express');
const router = express.Router();
const List = require('../models/listModel')

router.get('/', async (req, res) => {

    try {
        const showUsers = await List.find()
        res.status(200).json(showUsers)

    } catch (error) {
        if (error) throw error;
        console.log("data out")
    }
})

router.post('/', async (req, res) => {
    const list = new List({
        text: req.body.text
    })
    try {
        const newList = await list.save()
        res.status(201).json(newList)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
    // console.log(listdata)

})

router.delete('/:id',async(req,res)=>{
    try {
        const deleteListItem=await List.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteListItem);
    } catch (error) {
        
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const updateItem=await List.findByIdAndUpdate(req.params.id,req.body.text,{new:true})
        res.status(200).json(updateItem)
    } catch (error) {
        
    }
})

module.exports = router;
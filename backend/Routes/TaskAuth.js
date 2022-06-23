const express = require('express')
const Task = require('../Modules/Task')
const router = express.Router()


router.post('/createtask', async (req,res)=>{
    try {
        const taskAdd = await Task.create({
            name:req.body.name,
            detail:req.body.detail,
            // items:
            // {
            //     name:req.body.name,
            // },
        })
        res.json(taskAdd)
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json("Internal Server Error")
    }
})


router.get('/fetchtask', async(req,res)=>{
    try {
    const gettask = await Task.find({})
    res.json(gettask)
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json("Internal server error")
    }
})

router.delete('/deletetask/:id', async(req,res)=>{
    try {
    let deltask = await Task.findById(req.params.id)
    if (!deltask) {
        return res.status(400).json('not found')
    }

    deltask = await Task.findByIdAndDelete(req.params.id)
    res.json({'success':'deleted task', deltask:deltask})

        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json("Internal server error") 
    }
})



module.exports = router;
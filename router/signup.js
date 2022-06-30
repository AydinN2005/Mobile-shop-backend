const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/', (req,res)=>{
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(result=>{
            res.json({
                redirect: '/login',
                message: 'success'
            })
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
            res.json({
                redirect: "",
                message: 'not success please fix bugs'
            })
            console.log(err)
        })
})


module.exports = router;

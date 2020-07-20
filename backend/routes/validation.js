const express = require('express');
const router = express.Router();
const User = require('../dataBase/models');

router.post('/checkUserExist', async(req, res)=>{
    const {email} = req.body;
    try{
        const isUserExist = await User.findOne({email});

        if(isUserExist){
            return res.json(true);
        }

    }catch(error){
        return res.status(500).json(error)
    }
});

module.exports = router;
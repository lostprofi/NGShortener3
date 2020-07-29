const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../dataBase/models');

const router = express.Router();

router.post('/reg', async (req, res) => {
 
    const {
        username, email, password,
    } = req.body;

    try {
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            return res.status(500).json({ errors: [{ msg: 'User is already exist' }] });
        }

        const hashPassword = await bcrypt.hash(`${password}`, 10);

        const user = new User({
            username,
            email,
            password: hashPassword,
            role: 'guest',
            links: [],
            tags: [],
            description: '',
            refreshSessions: [],
        });

        await user.save();
        return res.status(201).json('User successfully registered');
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
});

module.exports = router;

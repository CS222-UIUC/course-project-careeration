const express = require('express')
const router = express.Router()
const User = require('../models/user')

// PUT one (login)
router.put('/', async (req, res) => {
    try {
        const user = await User.find({ "email": req.body.email })
        if (user.length == 0) {
            return res.status(200).json({ message: "Error: email does not exist", data: {} })
        }
        if (user[0].password != req.body.password) {
            return res.status(200).json({ message: "Error: incorrect password", data: {} })
        }
        return res.status(200).json({ message: "OK", data: user[0]._id })
    } catch (err) {
        return res.status(500).json({ message: err.message, data: [] })
    }
})

// POST one (signup)
router.post('/', async (req, res) => {
    try {
        const existingUsers = await User.find({ "email": req.body.email })
        if (existingUsers.length != 0) {
            return res.status(400).json({ message: "Error: email already exists", data: {} })
        }

        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            applications: []
        })
        await user.save()
        return res.status(201).json({ message: "User created", data: user._id })
    } catch (err) {
        return res.status(500).json({ message: err.message, data: {} })
    }
})

module.exports = router
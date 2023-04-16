const express = require('express')
const router = express.Router()
const Application = require('../models/application')
const User = require('../models/user')

// GET all
router.get('/', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.query.userid })
        const applications = []
        for (let i = 0; i < user.applications.length; i++) {
            applications.push(await Application.findById(user.applications[i]))
        }
        return res.status(200).json({ message: "OK", data: applications })
    } catch (err) {
        return res.status(500).json({ message: err.message, data: [] })
    }
})

module.exports = router
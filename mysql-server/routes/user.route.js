const user = require('../controllers/player.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()


    // router.get('/', user.getAll)

    app.use('/users', router)
}
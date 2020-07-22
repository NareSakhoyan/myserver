const player = require('../controllers/player.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()

    router.get('/', player.getAllPlayer)
    router.post('/', player.createPLayer)
    router.get('/:id', player.getPlayerById)
    router.put('/:id', player.updatePLayer)
    router.delete('/:id', player.deletePLayer)

    app.use('/player', router)
}
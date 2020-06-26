const html = require('../controllers/html.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()


    router.get('/', html.getAllHtmlTags)
    // router.get('/:id', html
    // .getHtmlById)
    router.get('/attributes', html.getAttributes)
    // router.get('/attrs/:id', html.getAttributeById)
    router.get('/values', html.getValues)
    // router.get('/values/:id', html.getvaluesById)

    app.use('/html', router)
}
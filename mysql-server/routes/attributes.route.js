const attribute = require('../controllers/attribute.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()

    router.get('/', attribute.getAllCss)
    // router.get('/:id', css.getCssById)
    router.get('/attributes', attribute.getAttributes)
    // router.get('/tags/:id', css.getTagsById)
    router.get('/values', attribute.getValues)
    // router.get('/values/:id', css.getvaluesById)
    router.post('/attributes/value', attribute.addAttrValue)
    router.post('/value', attribute.addValue)

    app.use('/attribute', router)
}
const html = require('../controllers/html.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()


    router.get('/', html.getAllHtmlTags)
    // router.get('/:id', css.getCssById)
    // router.get('/attrs', css.getAttributes)
    // router.get('/attrs/:id', css.getAttributeById)
    // router.get('/values', css.getvalues)
    // router.get('/values/:id', css.getvaluesById)

    app.use('/html', router)
}
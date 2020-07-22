const dbActions = require('../connectDB')

exports.getAllHtmlTags = (req, res) => {
    if (Object.keys(req.query).length){
        // this.findWithEmail(req, res)
    } else {
        let sql = "select * from html_tags"
        dbActions.writeQuery(sql, req, res)
    }
}

exports.getAttributes = (req, res) => {
    let sql = "select * from html_tag_attributes"
    dbActions.writeQuery(sql, req, res)
}

exports.getValues = (req, res) => {
    let sql = "select * from html_tag_attributes_values"
    dbActions.writeQuery(sql, req, res)
}

exports.addValue = (req, res) => {
    const {tagName, tagValue, cssIds, attributesIds} = req.body.data
    let sql = `insert into html_component values(null, '${tagName}', '${cssIds}', '${tagValue}', null, '${attributesIds}')`
    dbActions.writeQuery(sql, req, res)
}

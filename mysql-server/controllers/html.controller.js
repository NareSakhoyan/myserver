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

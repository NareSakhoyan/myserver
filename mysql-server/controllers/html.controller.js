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
    let {tagName, tagValue, cssIds, attributesIds} = req.body.data
    cssIds = JSON.stringify(cssIds)
    attributesIds = JSON.stringify(attributesIds)
    let sql = `insert into html_components values(null, ${tagName}, ${cssIds}, ${tagValue}, null, ${attributesIds})`
    console.log(sql);
    dbActions.writeQuery(sql, req, res)
}

exports.addTagValueValue = (req, res) => {
    let {tagValue} = req.body.data
    let sql = `insert into html_tag_values values(null, '${tagValue}')`
    console.log(sql);
    dbActions.writeQuery(sql, req, res)
}

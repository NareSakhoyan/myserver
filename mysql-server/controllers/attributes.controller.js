const dbActions = require('../connectDB')

exports.getAllCss = (req, res) => {
    if (Object.keys(req.query).length){
        // this.findWithEmail(req, res)
    } else {
        let sql = "select * from attributes"
        dbActions.writeQuery(sql, req, res)
    }
}

exports.getAttributes = (req, res) => {
    let sql = "select * from html_tag_attributes"
    dbActions.writeQuery(sql, req, res)
}

exports.getValues = (req, res) => {
    let sql = "select * from html_tag_values"
    dbActions.writeQuery(sql, req, res)
}

exports.addAttrValue = (req, res) => {
    const {valueId} = req.body.data
    let sql = `insert into html_tag_values values(null, '${valueId}')`
    console.log(sql);
    dbActions.writeQuery(sql, req, res)
}

exports.addValue = (req, res) => {
    const {valueId, attrId} = req.body.data
    let sql = `insert into attributes values(null, ${valueId}, ${attrId})`
    console.log(sql);
    dbActions.writeQuery(sql, req, res)
}

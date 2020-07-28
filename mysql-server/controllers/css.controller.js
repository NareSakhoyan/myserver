const dbActions = require('../connectDB')

exports.getAllCss = (req, res) => {
    if (Object.keys(req.query).length){
        // this.findWithEmail(req, res)
    } else {
        let sql = "select * from css"
        dbActions.writeQuery(sql, req, res)
    }
}

exports.getAttributes = (req, res) => {
    let sql = "select * from css_attributes"
    dbActions.writeQuery(sql, req, res)
}

exports.getValues = (req, res) => {
    let sql = "select * from css_values"
    dbActions.writeQuery(sql, req, res)
}

exports.addAttrValue = (req, res) => {
    const {valueId} = req.body.data
    let sql = `insert into css_values values (null, '${valueId}', 1);`
    console.log(sql);
    dbActions.writeQuery(sql, req, res)
}

exports.addValue = (req, res) => {
    const {valueId, attrId} = req.body.data
    let sql = `insert into css values(null, ${valueId}, ${attrId})`
    console.log(sql);
    dbActions.writeQuery(sql, req, res)
}

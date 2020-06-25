const dbActions = require('../connectDB')

exports.getAll = (req, res) => {
    if (Object.keys(req.query).length){
        // this.findWithEmail(req, res)
    } else {
        let sql = "select * from players"
        dbActions.writeQuery(sql, req, res)
    }
}

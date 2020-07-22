const dbActions = require('../connectDB')

exports.getAllPlayer = (req, res) => {
    let sql = 'select * from players'
    dbActions.writeQuery(sql, req, res)
}

exports.createPLayer = (req, res) => {
    let player = req.body.userSendToDb
    let sql =  `insert into players values(null, '${player.name}', '${player.surname}', '${player.gender}', STR_TO_DATE('${player.birth}', '%Y-%m-%d'), '${player.nationality}', '${player.country}', '${player.address}', '${player.phone}', '${player.email}', '${player.youtubeLinks}', '${player.image}', '${player.password}')`
    dbActions.writeQuery(sql, req, res)
}

exports.getPlayerById = (req, res) => {
    let id = req.params.id
    let sql =  `select * from players where id=${id}`
    dbActions.writeQuery(sql, req, res)
}

exports.updatePLayer = (req, res) => {
    let id = req.params.id
    let player = req.body.userSendToDb
    console.log(player)
    let sql =  `update set name='${player.name}', surname='${player.surname}', gender='${player.gender}', birth='${player.birth}', nationality='${player.nationality}', country='${player.country}', address='${player.address}', phone='${player.phone}', email='${player.email}', youtubeLinks='${player.youtubeLinks}', image='${player.image}',  password='${player.password}' where id=${id}`
    dbActions.writeQuery(sql, req, res)
}

exports.deletePLayer = (req, res) => {
    let id = req.params.id
    let sql =  `delete * from player where id=${id}`
    dbActions.writeQuery(sql, req, res)
}
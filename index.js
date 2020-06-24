const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001

let corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.json({message: "Welcome"})
    // connectDatabase()
})
require('./routes/user.route')(app)
// require('./routes/advert.route')(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
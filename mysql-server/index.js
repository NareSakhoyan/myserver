const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3002

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
    // connectDatabase() //fix this
})
require('./routes/user.route')(app)
require('./routes/css.route')(app)
require('./routes/html.route')(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(4666, console.log('running great on port 4666'))
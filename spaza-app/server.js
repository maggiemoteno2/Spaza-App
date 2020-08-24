const express = require('express')
const server = express()
const bodyParser = require('body-parser');
var cors = require('cors')


const port = 3001

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.listen(port, () => {
  console.log(`server listening at ${port}`)
}) 
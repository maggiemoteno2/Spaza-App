const express = require('express')
const server = express()
const bodyParser = require('body-parser');
var cors = require('cors')
const { userSignUp} = require('./routes/registryRoute')
const { MongoServer} = require('./config/dbConnection')
const { signIn } = require('./routes/logIn')


const port = 3001

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
userSignUp(server)
MongoServer(server)
signIn(server) 

server.listen(port, () => {
  console.log(`server listening at ${port}`)
}) 
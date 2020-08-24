const RegistryModel = require('./../model/credentialModel')

const userSignUp = function (server) {
server.post('/register',async(req,res)=>{
const {email,name,password} = req.body
try{
const user = await new RegistryModel({
email,
name,
password
}).save
res.status(201).json({user})
}catch(e){
console.log(e)
}

})
}



module.exports = { userSignUp }
const Shopper = require('./../model/credentialModel')
const { hashPassword }   = require('./../security/hashedPassword')
const { createToken } = require('./../security/createToken')


const userSignUp = function (server) {
  server.post("/register", async (req, res) => {
    const { email, password, name } = req.body;
    try {
      const hashedPassword  = await hashPassword(password)
      const user = await new Shopper({
        email,
        name,
        hashedPassword,
      }).save()
      console.log("password", hashedPassword)
      const token = await createToken(user.email)
      res.json({ token })
      
    } catch (e) {
      console.log(e)
    }
  })
}



module.exports = { userSignUp }
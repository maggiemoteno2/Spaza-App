const Shopper = require('./../model/credentialModel')
const { checkPassword } = require('./../security/hashedPassword')
const { createToken } = require('./../security/createToken')

const signIn = (server) => {
  server.post('/signIn', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Shopper.findOne({ email });
      if (user) {
        const passwordVerification = await checkPassword(password, email);
        const token = await createToken( user.email);
        if (passwordVerification) {
          return res.json({ token });
        }
        if (!passwordVerification) {
          return res.json({ error: "password or email is incorrect" });
        }
      } else {
        return res.json({ error: "user does not exist" });
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports ={ signIn }  
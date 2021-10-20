const bcrypt = require('bcrypt')

async function hashPassword(){
  const myPassword = 'a password 20.20'
  const hash = await bcrypt.hash(myPassword, 10)
  console.log(hash)
}

hashPassword()

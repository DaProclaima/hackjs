

function generatePassword(length) {
  const charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
  let password = ''
  for (let i = 0;  i < length; i++) {
    password += charset [
      Math.floor(
        Math.random() * charset.length
      )
    ]
    console.log(password)
  }
  // console.log(password)
}

generatePassword(6)

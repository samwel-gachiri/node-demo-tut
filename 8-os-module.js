const os = require('os')
const user = os.userInfo()

console.log(user)

console.log(`The system uptime is: ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freememo: os.freemem(),
}

console.log(currentOS)
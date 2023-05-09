const {writeFileSync, writeFile} = require('fs')
for(let i=0;i<10000;i++)
    writeFileSync('./content/big-file.txt', `I love you ${i}\n`, {flag: 'a'})
 
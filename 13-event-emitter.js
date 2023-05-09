const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log('data received');
})

customEmitter.on('responsewithname', (name, id)=>{
    console.log(`name: ${name} and Id : ${id} received`)
})

customEmitter.emit('response')
customEmitter.emit('responsewithname','John', 23)

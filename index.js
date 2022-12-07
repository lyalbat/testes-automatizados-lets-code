const mongoose = require('mongoose')
const server = require('./src/app')

mongoose.connect('mongodb+srv://larissa:senha@testes.zoe9u2q.mongodb.net/?retryWrites=true&w=majority')
    .then(() =>{
        console.log('Mongo connected')
        server.listen(3000, () => console.log('Server listening on PORT:::3000'))
    })
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const uri = `mongodb+srv://${mongoUser}:${mongoPass}@learning.bm32j.mongodb.net/Learning?retryWrites=true&w=majority` 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected Successfully')
})
.catch(console.error)
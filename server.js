const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@learning.bm32j.mongodb.net/Learning?retryWrites=true&w=majority` 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected Successfully')
})
.catch(console.error)
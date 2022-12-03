const mongosse = require('mongoose')

const Crypto = mongosse.model('Crypto', new mongosse.Schema({
    cryptoName:{type:String, required: true, unique: true},
    cryptoid:{type:String, required: true, unique: true},    
    amount:{type:Number, required: true, unique: true},
    userId:{type:String, required: false, unique: true},
}))

module.exports = Crypto
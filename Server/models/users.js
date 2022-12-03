const mongosse = require('mongoose')

const Users = mongosse.model('User', new mongosse.Schema({
    username:{type:String, required: true, unique: true},
    password:{type:String, required: true, unique: true},    
    accessLevel:{type:String, required: true, unique: true},
}))

module.exports = Users
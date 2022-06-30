const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userShema = new Schema({
    name : {
        required: true,
        type: String
    },
    family: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    }
} , {timestamps: true})
const user = mongoose.model('users', userShema)
module.exports = user;

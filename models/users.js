const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true,
        
    },
    lastname: {
        type: String,
        required:true,
        
    },
    address: {
        type: String,
        required:true,
        
    },
    phoneno:{
        type: String,
        required:true,
        
    },
    email:{
        type: String,
        required:true,
        
    },
    username: {
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
   
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);
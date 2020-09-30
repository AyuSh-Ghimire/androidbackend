const mongoose = require('mongoose');

const skincategorySchema= new mongoose.Schema({

    image:{
        type:String,
        required:true
    },
    category: {
        type:String,
       // required:true
    }

},{timestamps:true});

module.exports=mongoose.model('Category',skincategorySchema);
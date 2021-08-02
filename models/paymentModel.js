const mongoose = require("mongoose")

const paymentSchema= new mongoose.Schema({
    
    user_id:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    address:{
        type:Object,
        required:true
    },


    cart:{
        type:Array,
        defaut: []
    },


    status:{
        type:Boolean,
        defaut:false
    },

    paymentID:{
       type:String,
       required:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model('Payment', paymentSchema)
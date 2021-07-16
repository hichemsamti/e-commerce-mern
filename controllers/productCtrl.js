const Products = require("../models/productModel")

const productCtrl = {

   getProducts: async(req,res) => {

       try{


       }catch(err){

           return res.status(500).json({msg:err.message})
       }
   },



   createProducts: async(req,res) => {

    try{


    }catch(err){

        return res.status(500).json({msg:err.message})
    }
}


}


module.exports = productCtrl
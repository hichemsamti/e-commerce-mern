const Products = require("../models/productModel")

//filter , sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString
    }
    filtering(){}
    sorting(){}
    paginating(){}
}







const productCtrl = {

   getProducts: async(req,res) => {

       try{


        const products = await Products.find()

        res.json(products)

       }catch(err){

           return res.status(500).json({msg:err.message})
       }
   },



   createProduct: async(req,res) => {

    try{

      const {product_id, title, price,description,content,images,category} = req.body
      if(!images) return res.status(400).json({msg:"No image upload"})
      
      const product = await Products.findOne({product_id})

      if(product) return res.status(400).json({msg:"This product already exists"})
      
      const  newProduct = new Products({
        product_id, title:title.toLowerCase(), price,description,content,images,category
      })
          
     await newProduct.save()
     res.json({msg:'Product created'})



      

    }catch(err){

        return res.status(500).json({msg:err.message})
    }
},



   deleteProduct: async(req,res) => {

    try{

      await Products.findByIdAndDelete(req.params.id)
      res.json({msg:" Product deleted"})

    }catch(err){

        return res.status(500).json({msg:err.message})
    }
},



   updateProduct: async(req,res) => {

    try{
        const { title, price,description,content,images,category} = req.body
        console.log(req.body)
        if(!images) return res.status(400).json({msg:"No image upload"})
         
        await Products.findOneAndUpdate({_id:req.params.id},{
            title:title.toLowerCase(),price,description,content,images,category
        })

        res.json({msg:"Product updated"})
    }catch(err){

        return res.status(500).json({msg:err.message})
    }
}


}


module.exports = productCtrl
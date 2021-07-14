const Category = require("../models/categoryModel")


const categoryCtrl = {

    getCategories: async(req,res)=>{

         try{

            const categories = await Category.find()
            res.json(categories)

         }catch(err){

            return res.status(500).json({msg:err.message})

         }
        
    },

    createCategory: async (req,res)=>{

        try{
            // if user role 1 ---> admin
            // only admin can create update delete cats

            const {name} = req.body
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg:"This category exists."})

            const newCategory =  new Category ({name})

            await newCategory.save()
            res.json('Created a category')

        }catch(err){


            return res.status(500).json({msg:err.message})
        }
    }
     


}


module.exports = categoryCtrl
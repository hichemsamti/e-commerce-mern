import React,{useState , useContext} from 'react'
import axios from  "axios"
import {GlobalState} from "../../../GlobalState"
import Loading from "../utils/loading/Loading"
import "./createProduct.css"

const initialState = {
    product_id: "",
    title:"",
    price:0,
    description: "",
    content: "",
    category:""

}

export default function CreateProduct() {

    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading , setLoading] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    

    const handleUpload = async e =>{
        
        e.preventDefault()

        try{
            if(!isAdmin) return alert("You are not an Admin.")
            const file = e.target.files[0]
           // console.log(file)

           if(!file) return alert("File does not exisit.")

           



        }catch(err){

            alert(err.response.data.msg)
        }


    }


    const styleUpload = {
        display : images ? "block" : "none"
    }

    return (
        <div className="create_product">
            <div className="upload">

                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                <div id="file_img" style={styleUpload}>
                    <img src='' alt=""/>
                    <span>X</span>
                </div>
            </div>

            <form >
                <div className="row">
                <label htmlFor='product_id'>Product ID</label>
                <input type="text" name="product_id" id="product_id" required
                value={product.product_id}
                />
                </div>


                <div className="row">
                <label htmlFor='title'>Title</label>
                <input type="text" name="title" id="title" required
                value={product.title}
                />
                </div>


                <div className="row">
                <label htmlFor='price'>Price</label>
                <input type="number" name="price" id="price" required
                value={product.price}
                />
                </div>


                <div className="row">
                <label htmlFor='description'>Description</label>
                <textarea type="text" name="description" id="description" required
                value={product.description} rows='5'
                />
                </div>


                <div className="row">
                <label htmlFor='content'>Content</label>
                <textarea type="text" name="content" id="content" required
                value={product.content} rows="7"
                />
                </div>


                <div className="row">
                <label htmlFor='categories'>Categories</label>
                <select name="category" value={product.category}>
                    <option value="">Please select a category</option>
                    {
                        categories.map(category =>(

                            <option value={category._id} key={category._id}>
                                {category.name}
                            </option>
                        )

                        )
                    }



                </select>
                
                </div>

                <button type="submit">
                      Create
                </button>



            </form>
            
        </div>
    )
}

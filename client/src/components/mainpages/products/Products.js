import React, {useContext, useState } from 'react'
import {GlobalState} from "../../../GlobalState"
import ProductItem from "../utils/productItem/ProductItem"
import "./products.css"
import Loading from "../utils/loading/Loading"
import axios from "axios"


export default function Products() {
   const state = useContext(GlobalState)
   const [products, setProducts] = state.productsAPI.products
   const [isAdmin] = state.userAPI.isAdmin
   const [token] = state.token
   const [callback , setCallback] = state.productsAPI.callback
   const [loading, setLoading] = useState(false)
   const [isChecked , setIsChecked] = useState(false)


   const handleCheck = (id) =>{

         products.forEach(product =>{
             if(product._id === id) product.checked = !product.checked
         })

         setProducts([...products])
    
   }




   const deleteProduct = async(id, public_id) => {
    try{
       
       setLoading(true)
       const destroyImg =  axios.post('/api/destroy' , {public_id},{
           headers: {Authorization : token}
       })
       const deleteProduct = axios.delete('/api/products/' + id ,{
           headers: {Authorization : token}
       })

       await destroyImg
       await deleteProduct
       setCallback(!callback)
       setLoading(false)


    }catch (err) {

        alert(err.response.data.msg)
    }

}

    

const checkAll = () =>{
    products.forEach(product =>{
        product.checked = !isChecked
    })

    setProducts([...products])
    setIsChecked(!isChecked)
}



    if(loading) return <h5 className="products">Loading...</h5>
    return (
        <>

               {isAdmin && 
               
               <div className="delete-all">
                   <span>Select all</span>
                   <input type="checkbox" checked={isChecked} onChange={checkAll}/>
                   <button>Delete All</button>
               </div>
               
               }



        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product} isAdmin={isAdmin}
                    deleteProduct={deleteProduct} handleCheck={handleCheck}
                     />
                })
            }
           
        </div>
        {products.length === 0 && <Loading/>}
        </>
    )
}

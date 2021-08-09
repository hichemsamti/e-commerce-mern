import React from 'react'

import "./productItem.css"
import BtnRender from "../BtnRender"


export default function ProductItem({product, isAdmin,deleteProduct,handleCheck}) {
    
    //const [loading,setLoading] = useState(false)

  
    /* const handleCheck = () =>{

        let newProduct = [...product]
        newProduct.checked = !newProduct.checked
        setProducts(newProduct)


     }*/

    // if(loading) return <h3>Loading...</h3>

    return (
        <div className="product_card">

            {
                isAdmin && < input type="checkbox" checked={product.checked}
                onChange={()=>handleCheck(product._id)}
                />
            }

            <img src={product.images.url} alt=""/>


            <div className="product_box">

                <h2 title={product.title}>{product.title}</h2>

                <span> ${product.price}</span>
                <p>{product.description}</p>


            </div>

               <BtnRender product={product} deleteProduct={deleteProduct}/>
            </div>

       
    )
}

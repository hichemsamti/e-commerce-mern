import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function ProductsAPI() {
    const [products, setProducts] = useState([])
   
    return {
        products:[products,setProducts]
    }
}

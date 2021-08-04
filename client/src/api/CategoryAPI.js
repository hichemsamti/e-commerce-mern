import React, {useState,useEffect} from 'react'
import axios from "axios"


export default function CategoryAPI() {
    const [categories , setCategories]= useState([])

    useEffect(()=>{
        const getCategories = async() =>{
            const res =await axios.get('/api/category')
           // console.log(res)

           setCategories(res.data)

        }

        getCategories()
    },[])
    return {

        categories : [categories , setCategories]


    }
}

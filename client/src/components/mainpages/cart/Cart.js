import React, {useContext} from 'react'
import {GlobalState} from "../../../GlobalState"

export default function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart

    if(cart.length===0)
       return <h2 style={{textAlign:"center",fontSize:"5rem"}}>Cart Empty</h2>
    return (
        <div>
            {

               cart.map(product =>(



                
               ))

            }
        </div>
    )
}

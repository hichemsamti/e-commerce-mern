import React, {useState,useContext} from 'react'
import {GlobalState} from "../../GlobalState"
import Menu from  "./icon/bars-solid.svg"
import Close from  "./icon/times-solid.svg"
import Cart from  "./icon/shopping-cart-solid.svg"
import {Link} from 'react-router-dom'
import "./header.css"
export default function Header() {
    const state = useContext(GlobalState)
    console.log(state)
    
    return (
        <header>
          <div className="menu">
             <img src={Menu} alt="" width="30" />

          </div>

          <div className="logo">
              <h1>

                <Link to="/">Boxi Shop</Link>

              </h1>


          </div>

          <ul>

            <li><Link to="/"> Products</Link></li>
            <li><Link to="/login"> Login & Register </Link></li>
            <li>
                <img src={Close} alt="" width="30" className="menu" />
            </li>

          </ul>

          <div className="cart-icon">
              <span>0</span>
              <Link to="/cart">
                  <img src={Cart} alt="" width="30"/>
              </Link>
          </div>


        </header>
    )
}

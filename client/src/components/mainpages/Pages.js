import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from "./products/Products"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Cart from "./cart/Cart"
import NotFound from "./utils/notFound/NotFound"
import DetailProduct from "./detailProduct/DetailProduct"
import {GlobalState} from "../../GlobalState"
import History from "./history/History"
import SingleHistory from "./history/SingleHistory"
import Categories from "./categories/Categories"

export default function Pages() {

    const state= useContext(GlobalState)
    const isLogged = state.userAPI.isLogged
    const isAdmin = state.userAPI.isAdmin
    return (
        <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/detail/:id" exact component={DetailProduct}/>
            <Route path="/login" exact component={ Login}/>
            <Route path="/register" exact component={isLogged ? NotFound : Register}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/history" exact component={isLogged ? History : NotFound}/>
            <Route  path="/category" exact component={isAdmin ? Categories : NotFound}/>
            <Route  path="/history/:id" exact component={isLogged ? SingleHistory : NotFound}/>
            <Route path="*" exact component={NotFound}/>
        </Switch>
    )
}


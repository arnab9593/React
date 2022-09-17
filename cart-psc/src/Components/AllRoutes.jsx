import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}></Route>
            <Route path="/products/:products_id" element={<PrivateRoute><SingleProduct /></PrivateRoute>}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}

export default AllRoutes



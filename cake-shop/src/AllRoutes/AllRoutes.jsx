import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Signin from '../Components/Signin'
import Signup from '../Components/Signup'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='signin' element={<Signin></Signin>}></Route>
                <Route path='signup' element={<Signup></Signup>}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes    
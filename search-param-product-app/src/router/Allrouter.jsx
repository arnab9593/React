import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import ProductPage from "./product";
import AllProductPage from "./Allproduct";
import Errorpage from "./Error";
import User from "./user";

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/allproduct" element={<AllProductPage />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Errorpage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;
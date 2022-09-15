import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import DetailsoftheUser from './DetailsoftheUser';
import PagenotFound from './PagenotFound';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/users' element={<Users></Users>}></Route>
            <Route path='/users/:user_id' element={<DetailsoftheUser></DetailsoftheUser>}></Route>
            <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
        </Routes>
    )
}

export default AllRoutes

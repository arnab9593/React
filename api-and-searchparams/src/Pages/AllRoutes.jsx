import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Users from './Users'
import UserDetail from './UserDetail';

const AllRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/users' element={<Users></Users>}></Route>
            <Route path='/users/:user_id' element={<UserDetail></UserDetail>}></Route>
        </Routes>

    )

}

export default AllRoutes
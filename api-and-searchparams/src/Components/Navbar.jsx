import '../App.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = [
        { path: "/", title: 'Home' },
        { path: "/about", title: 'About' },
        { path: "/contact", title: 'Contact' },
        { path: "/users", title: 'Users' }
    ]

    return (
        <div className="navBardiv">
            {/* <h3>Home</h3>
            <h3>Contacts</h3>
            <h3>About</h3>
            <h3>Users</h3> */}
            {links.map((link) =>
                <NavLink key={link.path} to={link.path}>{link.title}</NavLink>
            )}
            
        </div>
    )

}

export default Navbar

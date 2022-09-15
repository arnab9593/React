
import { Link, NavLink } from 'react-router-dom';

const links = [
    { path: "/", title: 'Home' },
    { path: "/about", title: 'About' },
    { path: "/contact", title: 'Contact' },
    { path: "/users", title: 'Users' }
]

const Navbar = () => {

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',

    }

    return (
        <div style={navStyle}>

            {links.map((link) => 
                
                    <NavLink key={link.path} to={link.path}>{link.title}</NavLink>
                
            )}

            {/* {links.map((link) => (
                <Link key={link.path} to={link.path}>{link.title}</Link>
            ))} */}
        </div>
    )
}
export default Navbar
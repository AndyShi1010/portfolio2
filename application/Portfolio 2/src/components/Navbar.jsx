import { Link, Outlet } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    return(
        <>
        <Outlet />
        <nav className='navbar'>
            <div className='main-nav'> 
                <Link to="/about">About</Link>
                <Link to="/code">Code</Link>
                <Link to="/design">Design</Link>
            </div>
            <div className='social-menu'>
                <Link to="/">Social</Link>
            </div>
        </nav>
        </>
    );
}
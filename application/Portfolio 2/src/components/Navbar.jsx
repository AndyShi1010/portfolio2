import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    return(
        <>
        <Outlet />
        <nav className='navbar'>
          <Link to="/about">About</Link>
          <Link to="/code">Code</Link>
          <Link to="/design">Design</Link>
          <Link to="/">Social</Link>
        </nav>
        </>
    );
}
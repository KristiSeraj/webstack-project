import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='g-cyan-700 border-gray-200 dark:bg-gray-900'>
            <div>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
import React from 'react'

import {NavLink} from 'react-router-dom'

const Header = () => { 
    return ( 
        <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-3 rounded shadow mt-3">
            <ul className="navbar-nav">
                <li className="nav-item" > 
                    <NavLink to="/" exact className='nav-link'>
                        Home
                    </NavLink> 
                </li>
                <li className="nav-item"> 
                    <NavLink to="/posts" className='nav-link'>
                        Posts
                    </NavLink>  
                </li>
                <li className="nav-item"  >
                    <NavLink to="/create" className='nav-link'>
                            Create Post
                    </NavLink>   
                </li>
            </ul>
        </nav> 
    )
}

export default Header
import React, { useState } from 'react'
import Logo from './img/logo.png'
import Bar from './img/bar.png'

const Navbar = () => {
    const [responsiveMenu, setResponsiveMenu] = useState (false)
    const openResponsiveMenu = () => {
        setResponsiveMenu( !responsiveMenu )
    }
    return (
        <>
            <nav>
                <div className="container">
                    <div><img src={Logo} alt="" className='logo' /></div>
                    <ul className={responsiveMenu ? 'main_nav active' : 'main_nav'}>
                        <li><a href="" className='nav_item'>Home</a></li>
                        <li><a href="" className='nav_item'>Service</a></li>
                        <li><a href="" className='nav_item'>About</a></li>
                        <li><a href="" className='nav_item'>Blog</a></li>
                        <li><a href="" className='nav_item'>Contact</a></li>
                    </ul>
                    <img onClick={ openResponsiveMenu } src={Bar} alt="" className='bar' />
                </div>
            </nav>
        </>
    )
}

export default Navbar

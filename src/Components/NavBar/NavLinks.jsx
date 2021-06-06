import React from 'react'

const NavLinks = () => {

    const links = [
        {link: '/yourdevteam-test/#', label: 'Home.'},
        {link: '/yourdevteam-test/#title', label: 'About us.'},
        {link: '/yourdevteam-test/#portfolio', label: 'Portfolio.'},
        {link: '/yourdevteam-test/#', label: 'Blog.'},
        {link: '/yourdevteam-test/#contact', label: 'Contact us.'},
    ]
    
    return(
        <>
        {links.map((item, index) => <li key={index} className='nav__link'><a onClick={()=>document.getElementById('nav').classList.remove('active')} href={item.link}>{item.label}</a></li>)}
        </>
    )
}

export default NavLinks
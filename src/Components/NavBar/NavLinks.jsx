import React from 'react'

const NavLinks = () => {

    const links = [
        {link: '/#', label: 'Home.'},
        {link: '/#title', label: 'About us.'},
        {link: '/#portfolio', label: 'Portfolio.'},
        {link: '/', label: 'Blog.'},
        {link: '/#contact', label: 'Contact us.'},
    ]
    
    return(
        <>
        {links.map((item, index) => <li key={index} className='nav__link'><a onClick={()=>document.getElementById('nav').classList.remove('active')} href={item.link}>{item.label}</a></li>)}
        </>
    )
}

export default NavLinks
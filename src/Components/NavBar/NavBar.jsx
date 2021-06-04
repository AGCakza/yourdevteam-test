import React from 'react'
import logos from '../../assets/img/logo.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Select } from '@material-ui/core'
import NavLinks from './NavLinks'

const NavBar = () => {


    return (
        <nav id='nav'>
            <div className='nav-wrapper'>
                <div className="container nav-container">
                    <div className='nav__burger' onClick={() => document.getElementById('nav').classList.toggle('active')}>
                        <span />
                    </div>
                    <div className='nav__group'>
                        <div className="nav__logo">
                            <img src={logos} alt='logo'/>
                        </div>
                        <ul className="nav__list list">
                            <NavLinks />
                        </ul>
                    </div>
                    <div className='nav__group'>
                        <div className="nav__lang">
                        <Select
                            native
                        >
                            <option value={0}>EN</option>
                            <option value={1}>RU</option>
                        </Select>
                        </div>
                        <a href='/#contact' className="nav__contact">
                            Contact us <ArrowForwardIcon style={{color: '#ff3a47', fontSize: 30}} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
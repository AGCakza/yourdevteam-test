import React from 'react'
import NavLinks from '../NavBar/NavLinks'
import FooterSocials from './FooterSocials'

const Footer = () => {
    return(
        <div className="footer" id='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <h4 className="footer__sub sub_text uppercase">Doob</h4>
                    <h4 className="footer__title title_text uppercase">Creativity above</h4>
                    <ul className="footer__list list">
                        <NavLinks />
                    </ul>
                    <p className="footer__label">&copy; 2019 - Doob, All Right Reserved</p>
                    <FooterSocials />
                </div>
            </div>
        </div>
    )
}

export default Footer
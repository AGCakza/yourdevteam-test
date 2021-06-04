import React from 'react'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import dribble from '../../assets/icons/dribble.svg'

const FooterSocials = () => {

    const soc = [
        {link: '', img: facebook},
        {link: '', img: twitter},
        {link: '', img: dribble}
    ]
    return(
        <div className="footer__socials">
            {soc.map((item, index)=><div key={index} className='footer__socials_item'><a href={item.link}><img src={item.img} /></a></div>)}
        </div>
    )
}

export default FooterSocials
import React from 'react'
import Slider from 'react-slick'
import img from '../../assets/img/title.png'
import TitleCard from './TitleCard'

const Title = () => {

    const options = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 0,
        autoplaySpeed: 7500,
        autoplay: false
    }

    const items = [
        {title: 'The Spirit of Digital Agency.', label: 'Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.', img: img},
        {title: 'The Spirit of Digital Agency.2', label: 'Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.', img: img},
        {title: 'The Spirit of Digital Agency.3', label: 'Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.', img: img},
    ]

    return(
        <div className='title' id='title'>
            <div className="title-wrapper">
                <Slider {...options}>
                    {items.map((item, index) => <TitleCard item={item} index={index} key={index} />)}                        
                </Slider>
            </div>
        </div>
    )
}

export default Title
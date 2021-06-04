import React from 'react'
import { Link } from 'react-router-dom'

const TitleCard = ({
    item, index
}) => (
    <div key={index} >
        <div className='title__card'>
            <div className='title__info'>
                <div className="title__info_title">
                    <h3>{item.title}</h3>
                </div>
                <div className="title__info_label">
                    <p>{item.label}</p>
                </div>
                <div className="title__info__btns">
                    <div className="title__info__btns_about btn-red">
                        More about us
                    </div>
                    <Link to='/' className="title__info__btns_touch btn-tran">
                        Get in touch.
                    </Link>
                </div>
            </div>
            <div className="title__img">
                <img src={item.img} alt="title" />
            </div>
        </div>
    </div>
)

export default TitleCard
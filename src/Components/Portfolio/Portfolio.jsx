import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {

    const items = [
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    return(
        <div className='portfolio' id='portfolio'>
            <div className="container">
                <div className="portfolio-wrapper">
                    <h3 className='portfolio__title title_text'>
                        See some of our Creative work.
                    </h3>
                    <div className="portfolio__content">
                        {items.map((item, index) => <PortfolioCard item={item} index={index} key={index}/>)}
                    </div>
                    <Link to='/' className="portfolio_btn btn-tran">
                        See more of These.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
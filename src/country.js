import React from 'react'
import './country.css'

const CountryGrid = (props) => {
    return (
        props.gridList.map((el, i) =>
            <div key={i} className="col-4 " >
                <div className="card mb-4">
                    <a href="/" className="country-name">
                        <img className="card-img-top" src={el.image} alt='image' />
                        <div className=' d-flex justify-content-between align-items-center p-3 '>
                            <p>{el.titre}</p>
                            {el.button}
                        </div>
                    </a>
                </div>
            </div>
        )
    )
}
const CountryScroll = (props) => {
    return (
        props.scrollList.map((el, i) =>
            <div key={i} className="card size-card">
                <a href="/" className="country-name">
                    <img className="card-img-top" src={el.image} alt='image' />
                    <div className=' d-flex justify-content-between p-3 '>
                        <p>{el.titre}</p>
                        {el.button}
                    </div>
                </a>
            </div>
        )
    )
}
export { CountryGrid, CountryScroll };
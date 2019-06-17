import React from 'react'
import { CountryGrid, CountryScroll } from './country'
import './country.css'

const countries = [
    {
        image: require('./image/warsaw.png'),
        titre: 'warsaw',
        button: <button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>
    },
    {
        image: require('./image/barcelona.png'),
        titre: 'Barcelona',
        button: <button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

    },
    {
        image: require('./image/istanbul.png'),
        titre: 'Istanbul',
        button: <button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

    },
    {
        image: require('./image/rome.png'),
        titre: 'Rome',
        button: <button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

    },
    {
        image: require('./image/mexico-city.png'),
        titre: 'Mexico-City',
        button: <button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

    },
    {
        image: require('./image/curitiba.png'),
        titre: 'Curitiba',
        button: <button type="button" className="btn btn-primary btn-sm">SEE OPENINGS</button>

    },
]
const CountryList = () => {
    return (
        <div className="container main-image-container" >
            <div className="scroll-list">
                <div className=' row grid-countries-list'>
                    <CountryGrid gridList={countries}></CountryGrid>
                </div>
                <div className=' scroll-countries-list'>
                    <CountryScroll scrollList={countries} ></CountryScroll>
                </div>
            </div>
        </div>)
}
export default CountryList;

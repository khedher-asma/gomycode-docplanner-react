import React from 'react';
import './statistic.css'
import StatisticCard from './statisticCard';

const statisticsTab = [
    {
    className:'countries',
    image:require('./image/flag.png'),
    titre:'Leader in 10 countries',
    text:' Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
},
    {
    className:'appointments',
    image:require('./image/visits.png'),
    titre:'1.5 million appointments',
    text:'booked last month',

},
    {
    className:'patients',
    image:require('./image/patients.png'),
    titre:'30 million unique patients',
    text:'visit us every month',

},
    {
    className:'doctors',
    image:require('./image/doctors.png'),
    titre:'2 million active doctors',
    text:'trust in our solutions',

},
]
const Statistic = () => {
    return(
        <div className="section-five">
            <div className="container d-flex inner-section-five">
                <div className="first-div">
                    <div className="content-first-div">
                        <h3>The world's<br/> biggest healthcare platform</h3>
                        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                  
                    </div>
                </div>
                <div className="second-div">
                    <div className="row cards">
                        <StatisticCard statistics={statisticsTab}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Statistic;
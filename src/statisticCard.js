import React from 'react';
import './statistic.css'
const StatisticCard = (props) => {
    const tab=props.statistics
    let tabHtml=[]

    tabHtml = tab.map((el,i) =>
    <div key={i} className={"col-5 d-flex flex-column align-items-center "+el.className}>
        <img src={el.image}/>
        <h4>{el.titre}</h4>
        <p>{el.text}</p>
    </div>
    )
    return tabHtml
}
export default StatisticCard;
import React from 'react';
import './links.css'
const Links = () => {
return (
    <div className="container fourth-section">
        <div className="row">
            <div className="col-md-4">
                <div className="companies_txt">
                    <h3 className="companies-text">We are a global company<br/> with local culture</h3>
                </div>
               
            </div>
            <div className="col-md-8">
                <div className="d-flex flex-wrap partner">
                    <div><a href="#"><img src={require("./image/znanylekarz.PNG")} /></a></div>
                    <div><a href="#"><img src={require("./image/doctoralia.PNG")}/></a></div>
                    <div><a href="#"><img src={require("./image/miodottore.PNG")}/></a></div>
                    <div><a href="#"><img src={require("./image/doktortakvimi.PNG")}/></a></div>
                    <div><a href="#"><img src={require("./image/znanylekar.PNG")}/></a></div>
                </div>
            </div>

        </div>
    </div>)
}
export default Links
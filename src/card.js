import React from 'react';
import './card.css';
const Card = () => {
    return (

        <div className="container section-three">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card block-patient">
                        <div className="card-body">
                            <p className="text-patient">For patients</p>
                            <h3 className="title-patient" >Find a doctor, book a visit and solve any health-related doubt</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="dropdown ml-2">
                                    <button type="button" className="btn btn-sm dropdown-toggle country-btn" data-toggle="dropdown">
                                        CHOOSE COUNTRY
                                        </button>
                                    <div className="dropdown-menu  content-specification">
                                        <a className="dropdown-item" href="#">CHOOSE COUNTRY</a>
                                        <a className="dropdown-item" href="#">Argentina</a>
                                        <a className="dropdown-item" href="#">Australia</a>
                                        <a className="dropdown-item" href="#">Brazil</a>
                                        <a className="dropdown-item" href="#">Chile</a>
                                        <a className="dropdown-item" href="#">Colombia</a>
                                        <a className="dropdown-item" href="#">Czech</a>
                                        <a className="dropdown-item" href="#">France</a>
                                        <a className="dropdown-item" href="#">Italy</a>
                                        <a className="dropdown-item" href="#">Mexico</a>
                                        <a className="dropdown-item" href="#">Peru</a>
                                        <a className="dropdown-item" href="#">Poland</a>
                                        <a className="dropdown-item" href="#">Portugal</a>
                                        <a className="dropdown-item" href="#">Spain</a>
                                        <a className="dropdown-item" href="#">Turkey</a>
                                        <a className="dropdown-item" href="#">UK</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-8">
                                <div className="div-patient-img">
                                    <img className="patient-img" src={ require("./image/screen-marketplace@2x.png") } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card block-doctor">
                        <div className="card-body" >
                            <p className="text-doctor">For doctors</p>
                            <h3 className="title-doctor">Save time managing visits and cut no-shows by half</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-sm-12 col-md-12 col-lg-8">
                                <img className="doctor-img" src={require("./image/screen-saas.png")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
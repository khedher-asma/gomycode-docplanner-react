import React from 'react';
import './navBar.css';

class NavB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLanding: false
        };
        // This binding is necessary to make `this` work in the callback
        this.LandingList = this.LandingList.bind(this);
    }

    LandingList() {
        this.setState(state => ({
            isLanding: !state.isLanding
        }));
    }
    render() {
        return (
            <div>
                <nav className="initial-nav fixed-top" style={this.state.isLanding ? { display: 'none' } : { display: 'block' }}>
                    <div className="main-nav d-flex justify-content-between container">
                        <h1 className="image-main-nav">
                            <a href="/">
                                <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
                            </a>
                        </h1>
                        <div className="hamburger" onClick={this.LandingList}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <nav className="nav-main-nav">
                            <ul className="main-menu d-flex">
                                <li><a href="/" className="about-us">About us</a></li>
                                <li><a href="/" className="career">Career</a></li>
                                <li className="dropdown">
                                    <a >
                                        Departments<br />
                                    </a>
                                    <div className="dropdown-content">
                                        <ul>
                                            <li><a href="/">Marketing &amp; PR</a></li>
                                            <li><a href="/">Customer Success &amp; Sales</a></li>
                                            <li><a href="/">IT, Product, Design &amp; UX</a></li>
                                            <li><a href="/">Finance &amp; Administration</a></li>
                                            <li><a href="/">HR &amp; more</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
                <nav className="landing-nav" style={this.state.isLanding ? { display: 'block' } : { display: 'none' }}>
                    <div className="landing-main-nav container">
                        <div className="landing-img d-flex justify-content-between">
                            <a href="/">
                                <img className="logo-docplanner" src={require('./image/landing-logo.PNG')} alt="Docplanner Group" />
                            </a>
                            <a onClick={this.LandingList}>
                                <img className="close" src={require('./image/close.png')} alt="Docplanner Group" />
                            </a>
                        </div>

                        <div className="landing-content">
                            <a href="/" className="disable">About us</a>
                            <hr />
                            <a href="/">Career</a>
                            <hr />
                            <div className="landing-departments d-flex flex-column">
                                <a href="/" className="disable" >Departments</a>
                                <a href="/" >Marketing &amp; PR</a>
                                <a href="/">Customer Success &amp; Sales</a>
                                <a href="/">IT, Product, Design &amp; UX</a>
                                <a href="/">Finance &amp; Administration</a>
                                <a href="/">HR &amp; more</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavB;
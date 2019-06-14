import React from 'react';

function openLandingList() {
  document.getElementById("firstNav").style.display = "none";
  document.getElementById("secondNav").style.display = "block";
  console.log("adel")
}

function closeLandingList() {
  document.getElementById("firstNav").style.display = "block";
  document.getElementById("secondNav").style.display = "none";
}



const NavB = () => {
  return (
    <div>
      <nav className="initial-nav" id="firstNav">
        <div className="main-nav container">
          <h1 className="image-main-nav">
            <a href="/">
              <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
            </a>
          </h1>
          <div className="hamburger" onClick={openLandingList}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <nav className="nav-main-nav">
            <ul className="main-menu">
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
      <nav className="landing-nav" id="secondNav">
        <div className="landing-main-nav container">
          <div className="landing-img">
            <a href="/">
              <img className="logo-docplanner" src={require('./image/landing-logo.PNG')} alt="Docplanner Group" />
            </a>
            <a onClick={closeLandingList}>
              <img className="close" src={require('./image/close.png')} alt="Docplanner Group" />
            </a>
          </div>

          <div className="landing-content">
            <a href="/" className="disable">About us</a>
            <hr />
            <a href="/">Career</a>
            <hr />
            <div className="landing-departments">
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
  )
}
export default NavB;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavB from './navBar';
import FirstTitle from './firstTitle'
import Card from './card'
import Links from './links'
import Statistic from './statistic'
import SecondTitle from './secondTitle'
import CountryList from './countryList'
import Footer from './footer'

function App() {
  return (
    <div className="App">
      <NavB />
      <FirstTitle />
      <Card/>
      <Links/>
      <Statistic />
      <SecondTitle />
      <CountryList />
      <Footer />
    </div>
  );
}

export default App;

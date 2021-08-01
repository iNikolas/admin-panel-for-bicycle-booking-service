import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BicycleAdd from "./components/BicycleAdd/BicycleAdd";
import BicycleList from "./components/BicycleList/BicycleList";
import BicycleStatistics from "./components/BicycleStatistics/BicycleStatistics";

function App() {
    return (
        <div className='container'>
            <Header headerText='ADMIN.BIKE-BOOKING.COM'/>
            <BicycleList />
            <BicycleAdd />
            <BicycleStatistics />
            <Footer developerName='Nikolaj Lebed'/>
        </div>
    )
}

export default App;

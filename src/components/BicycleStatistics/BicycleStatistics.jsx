import React, { useEffect, useState } from 'react'
import './BicycleStatistics.css'
import {connect} from "react-redux";

const BicycleStatistics = (props) => {


    const [availableBikesArr, setAvailableBikesArr] = useState([])
    useEffect(() => {
        setAvailableBikesArr(
            props.bicycles.filter((bicycle) => bicycle.status === 'Available' )
        )
    }, [props.bicycles])

    const [bookedBikesArr, setBookedBikesArr] = useState([])
    useEffect(() => {
        setBookedBikesArr(
            props.bicycles.filter((bicycle) => bicycle.status === 'Busy' )
        )
    }, [props.bicycles])

    const [totalBikesPrice, setTotalBikesPrice] = useState(0)
    useEffect(() => {
        setTotalBikesPrice(
            props.bicycles?.reduce((total, bicycle) => total += +bicycle.price, 0)
        )
    }, [props.bicycles])

    const totalBikes = props.bicycles.length
    const availableBikes = availableBikesArr?.length
    const bookedBikes = bookedBikesArr?.length
    const averageBikeCost = totalBikesPrice / totalBikes

    return <div className='bicycle-statistics'>
        <div className='statistics-header-text'>STATISTICS</div>
        <div className='regular-text'><span>{'Total Bikes: '}</span><span
            className='emphasized-text'>{totalBikes ?? 0}</span></div>

        <div className='regular-text'><span>{'Available Bikes: '}</span><span
            className='emphasized-text'>{availableBikes  ?? 0}</span></div>

        <div className='regular-text'><span>{'Booked Bikes: '}</span><span
            className='emphasized-text'>{bookedBikes  ?? 0}</span></div>

        <div className='regular-text'><span>{'Average Bike Cost: '}</span><span
            className='emphasized-text'>{(!averageBikeCost || isNaN(averageBikeCost)) ? 0 : Math.ceil(averageBikeCost * 100) / 100}</span><span>{' UAH/hr.'}</span></div>
    </div>
}

const mapStateToProps = store => ({
    bicycles: store.bicycles
})

export default connect(mapStateToProps)(BicycleStatistics)
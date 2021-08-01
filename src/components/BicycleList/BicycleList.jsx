import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './BicycleList.css'
import BicycleElement from './BicycleElement/BicycleElement'
import { initialization } from '../../actions/BicycleListActions'

const BicycleList = (props) => {
    const initialized = props.initialized
    const bicycles = props.bicycles
    let bicyclesElements = []

    useEffect(() => {
        props.initializationAction()
    }, [])


    if (bicycles.length > 0) {
        bicycles.sort((a, b) => a.status.localeCompare(b.status))
        bicyclesElements = bicycles.map(bicycle => {
            return <BicycleElement key={bicycle.id} {...bicycle}/>
        })
    } else {
        bicyclesElements = <span
            className='semi-header-text'>{initialized ? 'Please make at least one entry' : 'Fetching data...'}</span>
    }

    return <div className='bicycle-list'>
        {bicyclesElements}
    </div>
}

const mapStateToProps = store => ({
    bicycles: store.bicycles,
    initialized: store.initialized.initialized
})

const mapDispatchToProps = dispatch => ({
    initializationAction: () => dispatch(initialization())
})

export default connect(mapStateToProps, mapDispatchToProps)(BicycleList)
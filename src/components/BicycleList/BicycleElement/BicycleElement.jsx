import React from 'react'
import {Form} from 'react-final-form'
import {changeBicycleStatus, deleteBicycleEntry} from "../../../actions/bicyclesActions";
import {connect} from "react-redux";

const BicycleElement = (props) => {
    let {name, type, id, color, status, price} = {...props}
    name = name.toUpperCase()
    type = type.toUpperCase()
    color = color.toUpperCase()

    let formWrapperStyle, colorsStyle


    if (status === 'Unavailable') {
        formWrapperStyle = {
            borderColor: '#F5ABAB',
            backgroundColor: '#F3F3F3'
        }

        colorsStyle = {
            backgroundColor: 'inherit',
            color: '#797979'
        }
    }

    if (status === 'Busy') {
        formWrapperStyle = {
            borderColor: '#F2994A',
        }
    }


    return <div style={formWrapperStyle} className='form-wrapper'>
            <Form onSubmit={onSubmit}
                  render={({handleSubmit}) => {
                      return <form onSubmit={handleSubmit}>
                          <div style={colorsStyle} className='row-div'>
                              <div>
                                  <label className='semi-header-text'>{name}</label>
                                  {' - '}
                                  <label className='main-text'>{type}</label>
                                  {' '}
                                  (<label className='main-text'>{color}</label>)
                              </div>
                              <div>
                                  <button style={colorsStyle} type='submit'>X</button>
                              </div>
                          </div>
                          <div className='row-div'>
                              <label className='small-text'>{id}</label>
                          </div>
                          <div className='row-div'>
                              <div>
                                  <label htmlFor='status' className='main-text'>{'STATUS: '}</label>
                                  <select style={{backgroundColor: 'inherit'}} onChange={onSelect} defaultValue={status}
                                          name='status' id='status'>
                                      <option value='Available'>Available</option>
                                      <option value='Unavailable'>Unavailable</option>
                                      <option value='Busy'>Busy</option>
                                  </select>
                              </div>
                              <div>
                                  <label className='price-text'>{`${price} UAH/hr.`}</label>
                              </div>
                          </div>
                      </form>
                  }}/>
    </div>

    function onSubmit() {
        props.deleteBicycleEntryAction(id)
    }

    function onSelect(event) {
        const status = event.currentTarget.value
        props.changeBicycleStatusAction(status, id)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteBicycleEntryAction: bicycleId => dispatch(deleteBicycleEntry(bicycleId)),
    changeBicycleStatusAction: (status, id) => dispatch(changeBicycleStatus(status, id))
})

export default connect(null, mapDispatchToProps)(BicycleElement)
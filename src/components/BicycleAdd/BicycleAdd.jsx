import React, {useEffect, useState} from 'react'
import {Form, Field} from 'react-final-form'
import Input from "../Fields/Input/Input"
import {minimumLength, fieldIsRequired, composeValidators, availableIdCheck} from "../Fields/validators/validators"
import css from './BicycleAdd.module.css'
import {connect} from 'react-redux'
import {addBicycle} from '../../actions/bicyclesActions'

const BicycleAdd = (props) => {
    const [bicyclesIdList, setBicycleList] = useState([])

    useEffect(() => {
        setBicycleList(props.bicycles?.map(bicycle => bicycle.id))
    }, [props.bicycles])


    return (<div className='bicycle-add'>
        <Form onSubmit={onSubmit}
              render={
                  ({handleSubmit, invalid, submitting, form}) => {
                      return <form onSubmit={(event) => {
                          handleSubmit(event)
                          form.restart()
                      }}
                      >

                          <div>
                              <Field
                                  name='name'
                                  type='text'
                                  placeholder='Name'
                                  validate={composeValidators(fieldIsRequired, minimumLength)}
                                  component={Input}
                              />
                              <Field
                                  name='type'
                                  type='text'
                                  placeholder='Type'
                                  validate={composeValidators(fieldIsRequired, minimumLength)}
                                  component={Input}
                              />
                          </div>

                          <div>
                              <Field
                                  name='color'
                                  type='text'
                                  placeholder='Color'
                                  validate={composeValidators(fieldIsRequired, minimumLength)}
                                  component={Input}
                              />
                              <Field
                                  name='wheelSize'
                                  type='number'
                                  step='0.01'
                                  placeholder='Wheel size'
                                  validate={fieldIsRequired}
                                  component={Input}
                              />
                          </div>

                          <div>
                              <Field
                                  name='price'
                                  type='number'
                                  step='0.01'
                                  placeholder='Price'
                                  validate={fieldIsRequired}
                                  component={Input}
                              />
                              <Field
                                  name='id'
                                  type='number'
                                  step='1'
                                  placeholder='ID (slug): XXXXXXXXXXXXXX'
                                  validate={composeValidators(fieldIsRequired, availableIdCheck(bicyclesIdList))}
                                  component={Input}
                              />
                          </div>
                          <Field
                              name='description'
                              type='textarea'
                              placeholder='Description'
                              validate={composeValidators(fieldIsRequired, minimumLength)}
                              component={Input}
                          />
                          <div className={css['buttons-wrapper']}>
                              <button type='submit'
                                      disabled={submitting || invalid}
                              >SAVE
                              </button>
                          </div>
                          <div className={css['buttons-wrapper']}>
                              <button type='button'
                                      onClick={() => form.restart()}
                                      disabled={submitting}
                              >CLEAR
                              </button>
                          </div>
                      </form>
                  }
              }

        />
    </div>)

    function onSubmit(event) {
        event.price = Math.floor(+event.price * 100) / 100
        props.addBicycleAction({
            ...event,
            status: 'Unavailable'
        })
    }
}

const mapStateToProps = store => ({
    bicycles: store.bicycles
})

const mapDispatchToProps = dispatch => ({
    addBicycleAction: bicycleInfo => dispatch(addBicycle(bicycleInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(BicycleAdd)
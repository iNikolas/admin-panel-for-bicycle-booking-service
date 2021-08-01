import React from 'react'
import css from './Input.module.css'

const Input = (props) => {
    const inputError = (props.meta.error && props.meta.touched) ? css.inputError : null

    const data = {
        type: props.type,
        placeholder: props.placeholder,
        step: props.step,
        ...props.input,

        className: inputError
    }


    let style = null
    let element = <input {...data} />

    if (data.type === 'textarea') {
        style = {
            width: '97%'
        }
        element = <textarea {...data} />
    }

    return <div className={css['input-wrapper']} style={style}>
        {element}
        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
    </div>
}

export default Input
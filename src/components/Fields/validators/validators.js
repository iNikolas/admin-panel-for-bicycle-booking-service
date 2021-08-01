export function minimumLength(value) {
    return (value?.length < 5) ? 'Minimum length is 5 characters' : undefined
}

export function fieldIsRequired(value) {
    return (!value || value === '') ? 'Field is required' : undefined
}

export function availableIdCheck(bicyclesIdList) {
    return function (value) {
        return (bicyclesIdList.includes(value)) ? 'This ID already settled' : undefined
    }
}


export function composeValidators(...validators) {
    return function (value) {
        return validators.reduce((error, validator) => error || validator(value), undefined)
    }
}
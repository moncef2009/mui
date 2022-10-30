const validate = (title, body) => {
    const errors = { title: '', body: '' };
    const titleValidation = validator.title(title, 7, 70)
    const bodyValidation = validator.body(body, 7, 2000)



    for (let i = 0; i < titleValidation.length; i++) {
        if (titleValidation[i] !== 'pass') {
            errors.title = titleValidation[i]
            i = titleValidation.length + 1
        }
    }
    for (let i = 0; i < bodyValidation.length; i++) {
        if (bodyValidation[i] !== 'pass') {
            errors.body = bodyValidation[i]
            i = bodyValidation.length + 1
        }
    }
    return { ...errors }
}



const messages = {
    required: 'this fieald is required',
    minlength: (min) => `this fieald must contain more than ${min} chars`,
    maxlength: (max) => `this fieald must contain less than ${max} chars`,
}


const rules = {
    required: (val) => val ? 'pass' : messages.required,
    minlength: (val, min) => val.length < min ? messages.minlength(min) : 'pass',
    maxlength: (val, max) => val.length > max ? messages.maxlength(max) : 'pass'
}


const validator = {
    title: (val, min, max) => {
        return (
            [
                rules.required(val),
                rules.minlength(val, min),
                rules.maxlength(val, max)

            ]
        )
    },
    body: (val, min, max) => {
        return (
            [
                rules.required(val),
                rules.minlength(val, min),
                rules.maxlength(val, max)

            ]
        )
    }
}


export default validate
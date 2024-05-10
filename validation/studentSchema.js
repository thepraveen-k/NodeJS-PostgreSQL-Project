const joi = require('@hapi/joi')

const schema = {

    user: joi.object({

        name: joi.string().max(100).required().messages({
            'string.empty': 'Display name cannot be empty'
        }),
        email: joi.string().email().required(),
        age: joi.number().integer().min(18).max(120).required().messages({
            'number.base': 'Age must be a number',
            'number.integer': 'Age must be an integer',
            'number.min': 'Age must be at least 18',
            'number.max': 'Age cannot exceed 120',
            'any.required': 'Age is required' 
        }),
        dob: joi.date().max('now').required().messages({
            'date.base': 'Date of birth must be a valid date',
            'date.max': 'Date of birth cannot be in the future',
            'any.required': 'Date of birth is required'
        })

       
    })
}

module.exports = schema;
const joi = require('@hapi/joi');

const schema = {
    marks: joi.object({
        student_id: joi.number().integer().min(1).required().messages({
            'number.base': 'Student ID must be a number',
            'number.integer': 'Student ID must be an integer',
            'number.min': 'Student ID must be at least 1',
            'any.required': 'Student ID is required' 
        }),
        subject: joi.string().max(255).required().empty(false).messages({
            'string.empty': 'Subject cannot be empty',
            'string.max': 'Subject must not exceed 255 characters',
            'any.empty': 'Subject cannot be empty'
        }),
        marks: joi.number().integer().min(0).max(100).required().empty(false).messages({
            'number.base': 'Marks must be a number',
            'number.integer': 'Marks must be an integer',
            'number.min': 'Marks must be at least 0',
            'number.max': 'Marks cannot exceed 100',
            'any.required': 'Marks is required',
            'any.empty': 'Marks cannot be empty'
        })
    })
};

module.exports = schema;

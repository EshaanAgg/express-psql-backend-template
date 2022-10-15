import { body, validationResult } from 'express-validator';

export const signinValidationRules = () => {
    return [
        body('username').isString(),
        body('password').isString()
    ]
}

export const createValidationRules = () => {
    return [
        body('username').isString(),
        body('password').isStrongPassword(),
        body('name').isString()
    ]
}

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) return next();

    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}))

    return res.status(422).json({
        message: 'Invalid request',
        errors: extractedErrors
    })
}
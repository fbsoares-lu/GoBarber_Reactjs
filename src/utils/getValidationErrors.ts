import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationError(err: ValidationError): Errors {
    const getValidationErrors: Errors = {};

    err.inner.forEach(errors => {
        getValidationErrors[errors.path] = errors.message;
    });

    return getValidationErrors;
}

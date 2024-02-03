import Joi from 'joi';

describe('Joi', () => {
    test('should be able to create schema', () => {
        const schema = Joi.string().min(3).max(100).required();

        const result = schema.validate('us');
        if (result.error) {
            console.info(result.error);
        }

    });

    test('should be able to validate common data types', () => {  
        const emailSchema = Joi.string().email().required();
        const isAdminSchema = Joi.boolean().required();
        const ageSchema = Joi.number().required().min(18);

        // results
        const emailResult = emailSchema.validate('uqierach@gmail.com');
        console.info(emailResult);

        const isAdminResult = isAdminSchema.validate('true');
        console.info(isAdminResult);

        const ageResult = ageSchema.validate('23');
        console.info(ageResult);
    });

    test('should be able to validate date format', () => {  
        const birthDateSchema = Joi.date().required().max('now').min('1-1-2000');

        const result = birthDateSchema.validate('1-1-1990');
        console.info(result);

        const result2 = birthDateSchema.validate('1-1-2022');
        console.info(result2); 
    });


})
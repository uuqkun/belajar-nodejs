import Joi from 'joi';

describe('Joi', () => {  
    test('should validate object data type', () => {  
        const loginSchema = Joi.object({
            username: Joi.string().min(3).max(100).email().required(),
            password: Joi.string().min(8).max(100).required()
        });

        const request = {
            username: 'uqierach@gmail.com', 
            password: 'uqierach1234'
        };
        const result = loginSchema.validate(request, {
            abortEarly: false
        });

        console.info(result);
    });
})

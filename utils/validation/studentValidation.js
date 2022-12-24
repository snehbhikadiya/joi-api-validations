const Joi=require('Joi');

const studentSchema=Joi.object({
    name:Joi.string().empty().min(2).max(8).required().trim().messages({
        'string.emty':'name is reqired please enter name',
        'string.min':'name have min langth is 2 so pleas enter above...',
        'any.only':'first name is required'
    }),
    id:Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).allow(null).allow().trim().messages({
       'string.pattern.base': "Invalid id"
    }),
    division:Joi.string().empty().required().min(1).max(5).trim().messages({
        'string.empty':'please enter division',
        'any.required':'division is required so please add division',
        'string.min':'divison have 1 min length so please',
        'any.only':' division is required'
    }),
    club:Joi.string().empty().required().trim().messages({
        'string.empty':'please enter club',
        'any.required':'club is required so please add club',
        'any.only':' club is required'
    })
})

module.exports=studentSchema;
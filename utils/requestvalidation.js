const Validators = require('./validation/index');

module.exports = function (validation) {

    if (!Validators.hasOwnProperty(validation)) {
        throw new Error(`${validation} validater is not exist`);
    }

    return async function (req, res, next) {
        try {
            const validated =   await Validators[validation].validateAsync(req.body)
            req.body = validated
            next();
        } catch (error) {
            if (error.isJoi) {
                res.status(422).json({
                    success: false,
                    message: error.message
                })
            }
    
        }
    }
}


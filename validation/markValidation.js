const marksSchema = require('./markSchema');

module.exports = {
    addMarkValidation: async (req, res, next) => {
        const { error } = marksSchema.marks.validate(req.body);
        if (error) {
            res.json({
                success: 0,
                message: error.details[0].message 
            });
        } else {
            next();
        }
    }
};
